import { Stitches } from '@nsfw-app/ui'

const { createTheme, theme } = Stitches

// Can override values from the nsfw/ui theme, or provide new ones.
export const marketingTheme = createTheme('marketing-theme', {
  colors: {
    violet300: '#6966FF',
  },
})
