// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      scale: 1.2,
      warn: true,
      collections: {
        custom: FileSystemIconLoader('./src/assets/icons'),
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  safelist: [],
})
