import { fileURLToPath } from "node:url"

import mdx from "@astrojs/mdx"
import solidJs from "@astrojs/solid-js"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), solidJs()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  }
})
