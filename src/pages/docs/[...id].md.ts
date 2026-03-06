import { getCollection, type CollectionEntry } from "astro:content"

import { toRouteId } from "~/lib/docs"

export async function getStaticPaths() {
  const pages = await getCollection("docs")

  return pages.map((page) => {
    const routeId = toRouteId(page.id)

    return {
      params: { id: routeId || "index" },
      props: { page }
    }
  })
}

type DocsPage = CollectionEntry<"docs">

export async function GET({ props }: { props: { page: DocsPage } }) {
  return new Response(props.page.body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8"
    }
  })
}
