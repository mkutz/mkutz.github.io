import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdownPage from './plugins/markdownPage.js'

const page = (path) => fileURLToPath(new URL(path, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), markdownPage()],
  input: {
    main: page('./index.html'),
    'trust-responsibility-2026-11-17-atd2026': page('./talks/trust-responsibility/2026-11-17-atd2026/index.html'),
    'measure-quality-2023-12-12-automation-advocates': page('./talks/measure-quality/2023-12-12-automation-advocates/index.html'),
  },
})
