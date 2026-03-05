import { readFile } from "node:fs/promises"
import path from "node:path"

import { DEFAULT_STYLE_NAME, STYLE_CLASS_PREFIX } from "~/lib/design-system-defaults"

const STYLE_DIRECTORY = path.join(process.cwd(), "src/registry/styles")

type StyleMap = Record<string, string>
const styleMapCache = new Map<string, Promise<StyleMap>>()

function normalizeStyleName(styleName?: string) {
  const value = styleName?.trim() || DEFAULT_STYLE_NAME
  if (value.startsWith(STYLE_CLASS_PREFIX)) {
    return value.slice(STYLE_CLASS_PREFIX.length)
  }

  return value
}

function getStyleFilePath(styleName: string) {
  return path.join(STYLE_DIRECTORY, `style-${styleName}.css`)
}

async function readStyleFile(styleName: string) {
  try {
    return await readFile(getStyleFilePath(styleName), "utf-8")
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined
    }

    throw error
  }
}

function findClosingBrace(value: string, openingBraceIndex: number) {
  let depth = 0

  for (let index = openingBraceIndex; index < value.length; index++) {
    const char = value[index]

    if (char === "{") {
      depth += 1
      continue
    }

    if (char === "}") {
      depth -= 1

      if (depth === 0) {
        return index
      }
    }
  }

  return -1
}

function extractApplyClasses(block: string) {
  const applyPattern = /@apply\s+([^;]+);/g
  const classes: string[] = []

  let match: RegExpExecArray | null = null
  while (true) {
    match = applyPattern.exec(block)
    if (!match) {
      break
    }

    const value = match[1]?.trim()
    if (value) {
      classes.push(value)
    }
  }

  return classes.join(" ").trim()
}

function createStyleMap(styleCss: string): StyleMap {
  const map: StyleMap = {}
  const classPattern = /\.((?:cn-[\w-]+))\s*\{/g

  let match: RegExpExecArray | null = null
  while (true) {
    match = classPattern.exec(styleCss)
    if (!match) {
      break
    }

    const className = match[1]
    const openingBraceIndex = classPattern.lastIndex - 1
    const closingBraceIndex = findClosingBrace(styleCss, openingBraceIndex)

    if (closingBraceIndex === -1) {
      break
    }

    const block = styleCss.slice(openingBraceIndex + 1, closingBraceIndex)
    const applyClasses = extractApplyClasses(block)

    if (applyClasses) {
      map[className] = map[className] ? `${applyClasses} ${map[className]}` : applyClasses
    }

    classPattern.lastIndex = closingBraceIndex + 1
  }

  return map
}

async function getStyleMap(styleName?: string) {
  const normalizedStyleName = normalizeStyleName(styleName)
  const cached = styleMapCache.get(normalizedStyleName)

  if (cached) {
    return cached
  }

  const styleMapPromise = (async () => {
    const styleCss =
      (await readStyleFile(normalizedStyleName)) ??
      (normalizedStyleName === DEFAULT_STYLE_NAME
        ? undefined
        : await readStyleFile(DEFAULT_STYLE_NAME))

    if (!styleCss) {
      return {}
    }

    return createStyleMap(styleCss)
  })()

  styleMapCache.set(normalizedStyleName, styleMapPromise)
  return styleMapPromise
}

function rewriteRegistryImports(code: string) {
  const replacements: Array<[string, string]> = [
    ["~/registry/ui/", "~/components/ui/"],
    ["~/registry/lib/", "~/lib/"],
    ["~/registry/hooks/", "~/hooks/"]
  ]

  let formatted = code
  for (const [from, to] of replacements) {
    formatted = formatted.replaceAll(from, to)
  }

  return formatted
}

function applyStyleMap(code: string, styleMap: StyleMap) {
  return code.replace(/(['"])(?:\\.|(?!\1).)*\1/g, (literal) => {
    if (!literal.includes("cn-")) {
      return literal
    }

    const quote = literal[0]
    const value = literal
      .slice(1, -1)
      .replace(/(?:^|\s)\bcn-[\w-]+\b(?=\s|$)/g, (segment) => {
        const className = segment.trim()
        const mapped = styleMap[className]

        if (!mapped) {
          return ""
        }

        return segment.startsWith(" ") ? ` ${mapped}` : mapped
      })
      .trim()

    return `${quote}${value}${quote}`
  })
}

export async function formatCode(code: string, styleName?: string) {
  let formatted = rewriteRegistryImports(code)
  formatted = formatted.replaceAll("export default", "export")

  const styleMap = await getStyleMap(styleName)

  return applyStyleMap(formatted, styleMap)
}
