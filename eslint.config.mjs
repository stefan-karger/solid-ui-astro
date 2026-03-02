import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import astro from "eslint-plugin-astro"
import solidTypescript from "eslint-plugin-solid/configs/typescript"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"]
  },
  {
    files: [
      "**/*.config.{js,cjs,mjs,ts}",
      "astro.config.mjs",
      "eslint.config.mjs",
      "prettier.config.mjs"
    ],
    languageOptions: {
      globals: globals.node
    }
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.tsx"],
    ...solidTypescript
  },
  eslintConfigPrettier
]
