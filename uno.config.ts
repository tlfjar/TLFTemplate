import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
  theme: {
    fontFamily: {
      // this enables the custom fonds in `assets/fonts.css`
      headline: ['chomsky', 'old-newspaper'],
      body: 'elegant-typewriter',
    },
  },
})
