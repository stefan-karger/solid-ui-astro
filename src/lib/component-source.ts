import { readFile } from "node:fs/promises"
import path from "node:path"

type ComponentSourceOptions = {
  name?: string
  src?: string
  maxLines?: number
}

const UI_COMPONENTS_DIR = path.join(process.cwd(), "src/registry/ui")

async function readTextFile(filePath: string) {
  try {
    return await readFile(filePath, "utf-8")
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined
    }

    throw error
  }
}

function trimToMaxLines(code: string, maxLines?: number) {
  if (!maxLines || maxLines < 1) {
    return code
  }

  return code.split("\n").slice(0, maxLines).join("\n")
}

export async function getComponentSourceCode({ name, src, maxLines }: ComponentSourceOptions) {
  let code: string | undefined

  if (name) {
    const sourcePath = path.join(UI_COMPONENTS_DIR, `${name}.tsx`)
    code = await readTextFile(sourcePath)
  }

  if (src) {
    const sourcePath = path.isAbsolute(src) ? src : path.join(process.cwd(), src)
    code = await readTextFile(sourcePath)
  }

  if (!code) {
    return undefined
  }

  return trimToMaxLines(code, maxLines)
}

export function getComponentSourceLanguage({
  language,
  title,
  src
}: {
  language?: string
  title?: string
  src?: string
}) {
  if (language) {
    return language
  }

  const titleExtension = title ? path.extname(title).replace(".", "") : ""
  if (titleExtension) {
    return titleExtension
  }

  const srcExtension = src ? path.extname(src).replace(".", "") : ""
  if (srcExtension) {
    return srcExtension
  }

  return "tsx"
}
