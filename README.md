# Nuxt 3 Modified Starter

This is a Nuxt 3 starter with some modifications to the default setup. Heavily inspired by [Vitesse-Nuxt](https://github.com/antfu/vitesse-nuxt)

## Included Modules

The official description of each module is included below, along with a brief explanation of its use in any project (where necessary).

### Core
- [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces. I've used it since Vue 2, and in my eyes it is the simplest framework to learn and use.
- [Nuxt 3](https://nuxt.com/) - The Intuitive Vue Framework. Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence. A better dev experience in every way.

### Styling
- [Nuxt Content](https://content.nuxtjs.org/) - parses `.md`, `.json`, `.yaml`, and `.csv` files to create a powerful data layer for your application. Use Vue Components with the MDC syntax. Particularly useful for blogs and documentation sites, and for forms that reference data to calculate prices, etc.
- [Nuxt Image](https://image.nuxt.com/) - Plug-and-play image optimization for Nuxt apps. Resize and transform your images using built-in optimizer or your favorite images CDN. Can resize and reformat images with simple directives. Also supports lazy loading and responsive images.
- [Radix-Vue](https://www.radix-vue.com/) - Unstyled, accessible components for building high‑quality design systems and web apps in Vue. This is my favorite of the component libraries, as it is unstyled, reasonably complete, and accessible. I will not be offended if you choose another library, such as [HeadlessUI](https://headlessui.com/v1/vue) or [Element Plus](https://element-plus.org/).
- [FormKit](https://formkit.com/) - The open-source form framework for Vue. FormKit is a powerful form framework for Vue that makes it easy to build complex forms with a simple API. It is designed to be flexible and extensible, so you can build forms that meet your needs without having to write a lot of boilerplate code. Really takes a lot of the pain out of form building.
- [UnoCSS](https://unocss.dev/) - Instant On-demand Atomic CSS Engine. UnoCSS is my default choice for atomic CSS. All of the benefits of Tailwind, with small file sizes, useful integrations, and a more flexible api.
- [Vue Starport](https://github.com/antfu/vue-starport) - Shared Vue component across routes with animations. This is already integrated into the project, no imports necessary. It is hard to explain why this is such a cool feature, so I recommend checking out the [live demo](https://vue-starport.netlify.app/). The GitHub repo has a note on it that [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) may render this component unnecessary, but View Transitions still lacks some browser support and it seems more complicated that Starport.

### Utilities
- [VueUse](https://vueuse.org/) - Collection of Essential Vue Composition Utilities. Essential is the key word here. If you are trying to do something structural in your view components, there is a good chance that VueUse has a composition function for it. It is a great way to keep your components clean and simple.
- [Nuxt SEO](https://nuxtseo.com/) - a collection of hand-crafted  Nuxt Modules that will make Google (and your marketing team) love you. I am not well-versed in SEO, so any module that can help me with that is a win in my book.
- [Pinia](https://pinia.vuejs.org/) -The intuitive store for Vue.js. Type Safe, Extensible, and Modular by design. Forget you are even using a store. Pinia makes the nightmare of state management substantially easier.
- [ESLint](https://eslint.nuxt.com/) with [antfu](https://github.com/antfu)'s [eslint-config](https://github.com/antfu/eslint-config) - generates a project-aware [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) and provides the ability to optionally run ESLint check along side the dev server. It is what I've always used for linting. Feel free to replace it if you have a preference for another linter, but keep in mind that you will have to pull out the eslint config and the vscode settings relevant to eslint.

### VSCode Settings

This starter uses [antfu](https://github.com/antfu)'s [VSCode settings](https://github.com/antfu/vscode-settings) and [VSCode file nesting config](https://github.com/antfu/vscode-file-nesting-config) to keep your project organized, linted, and formatted. I am not great at coding, and this helps keep me on track. At the very least, make sure to use the plugins in the essential section.

## Further Documentation

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction), as well as the documentation for the above modules, to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
