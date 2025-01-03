<div align="center">
  <img src="./public/logo4x.png" alt="onionl-ui logo" style="width: 240px;" />

  <h1>Onionl UI🚀</h1>

  <h4>A modern lightweight component library based on Vue 3.</h4>

[![NPM version](https://img.shields.io/npm/v/onionl-ui.svg)](https://npmjs.org/package/onionl-ui)
[![Coverage](https://img.shields.io/codecov/c/github/Onion-L/onionl-ui)](https://codecov.io/gh/Onion-L/onionl-ui)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)
[![License](https://img.shields.io/github/license/Onion-L/onionl-ui)](https://github.com/Onion-L/onionl-ui/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/Onion-L/onionl-ui.svg?style=flat-square&logo=github&logoColor=white)](https://github.com/Onion-L/onionl-ui/commits/main)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Onion-L/onionl-ui?style=flat-square&logo=github&logoColor=white)](https://github.com/Onion-L/onionl-ui/graphs/commit-activity)

English | [中文](./README-zh.md)

</div>

⚠️ This project is still in its early stages of development.

🌱 This is my first open source project. As a beginner in open source, I'm learning and growing with this project. Any feedback and contributions are warmly welcomed!

## ✨ Features

- 🛠️ **Modern Stack** - Vue 3 + TypeScript with full type safety
- 🎨 **Atomic CSS** - Powered by UnoCSS for flexible styling
- 🚀 **Tree-shakable** - On-demand importing for optimal bundle size
- 💎 **Rich Ecosystem** - Comprehensive components and UnoCSS preset
- 📖 **Well Documented** - Clear examples and quick start guides
- ✨ **Polished UX** - Focused on interaction details and content display

## 🚀 Installation

Using npm:

```bash
# Install all required dependencies
npm install onionl-ui @onionl-ui/preset
```

Using yarn:

```bash
# Install all required dependencies
yarn add onionl-ui @onionl-ui/preset
```

Using pnpm:

```bash
# Install all required dependencies
pnpm add onionl-ui @onionl-ui/preset
```

## 🔨 Quick Start

```ts
import OnionlUI from 'onionl-ui'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(OnionlUI)
app.mount('#app')
```

## 📦 Components

Basic usage:

```html
<template>
  <ol-button type="primary">
    Primary Button
  </ol-button>
  <ol-button type="secondary">
    Secondary Button
  </ol-button>
  <ol-button size="lg">
    Large Button
  </ol-button>
</template>
```

For more component usage, please check the [Component Documentation](https://onionl-ui.vercel.app/).

## 📝 To-Do List

Check the [TODO](./TODO.md) file to view the development plan of Onionl-UI. Suggestions, ideas or code contributions are welcome!

## 📄 License

[MIT](./LICENSE) License © 2024 XL
