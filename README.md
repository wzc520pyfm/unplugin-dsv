# unplugin-dsv

[![NPM version](https://img.shields.io/npm/v/unplugin-dsv?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-dsv)

Starter template for [unplugin](https://github.com/unjs/unplugin).

## Install

```bash
npm i unplugin-dsv
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginDsv from 'unplugin-dsv/vite'

export default defineConfig({
  plugins: [
    UnpluginDsv({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginDsv from 'unplugin-dsv/rollup'

export default {
  plugins: [
    UnpluginDsv({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-dsv/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-dsv/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-dsv/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginDsv from 'unplugin-dsv/esbuild'

build({
  plugins: [UnpluginDsv()],
})
```

<br></details>
