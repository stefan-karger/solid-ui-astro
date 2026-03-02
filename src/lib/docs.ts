import { getCollection, type CollectionEntry } from "astro:content"

export type DocsPage = CollectionEntry<"docs">

export type SidebarLink = {
  title: string
  href: string
}

export type SidebarGroup = {
  title: string
  items: SidebarLink[]
}

export type SidebarData = {
  topLevel: SidebarLink[]
  groups: SidebarGroup[]
}

const DOC_EXTENSION_PATTERN = /\.mdx?$/

export function toRouteId(id: string) {
  return id.replace(DOC_EXTENSION_PATTERN, "")
}

export async function getDocsPages(): Promise<DocsPage[]> {
  const pages = await getCollection("docs")
  return pages
}

export async function getNeighbors(id: string) {
  const pages = await getDocsPages()
  const index = pages.findIndex((page) => toRouteId(page.id) === id)

  if (index === -1) {
    return { previous: null, next: null }
  }

  return {
    previous: pages[index - 1] ?? null,
    next: pages[index + 1] ?? null
  }
}

function toPathname(id: string) {
  return `/docs/${toRouteId(id)}`
}

export async function getSidebarData(): Promise<SidebarData> {
  const pages = await getDocsPages()
  const roots = pages.filter((page) => !toRouteId(page.id).includes("/"))

  const topLevel = roots.map((page) => ({
    title: page.data.title,
    href: toPathname(page.id)
  }))

  const groups = roots.map((root) => {
    const segment = toRouteId(root.id)
    const children = pages
      .filter((page) => toRouteId(page.id).startsWith(`${segment}/`))
      .map((page) => ({
        title: page.data.title,
        href: toPathname(page.id)
      }))

    const items = [{ title: root.data.title, href: toPathname(root.id) }, ...children]

    return {
      title: root.data.title,
      items
    }
  })

  return {
    topLevel,
    groups
  }
}
