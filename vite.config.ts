import { defineConfig } from 'vite'
// import { devtools } from '@tanstack/devtools-vite'
import { paraglideVitePlugin } from '@inlang/paraglide-js'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { translatedPathnames } from '#/i18n/lib'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    // devtools(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
      strategy: ['url', 'baseLocale'],
      // Working version
      // urlPatterns: [
      //   {
      //     pattern: "/",
      //     localized: [
      //       ["de", "/de"],
      //       ["en", "/"],
      //     ],
      //   },
      //   {
      //     pattern: "/:path(.*)?",
      //     localized: [
      //       ["de", "/de/:path(.*)?"],
      //       ["en", "/:path(.*)?"],
      //     ],
      //   },
      // ],
      // Not working version
      urlPatterns: translatedPathnames,
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
