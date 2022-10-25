import { Stitches } from '@nsfw-app/ui'

const { createTheme, theme } = Stitches

// Can override values from the nsfw/ui theme, or provide new ones.
export const marketingTheme = createTheme('marketing-theme', {
  colors: {
    //@ts-ignore
    violet800: '#6966FF',
  },
})
