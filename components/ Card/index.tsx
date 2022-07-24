import { Box, Stitches } from '@nsfw-app/ui'

export const Card = Stitches.styled(Box, {
  width: '100%',
  borderRadius: '16px',
  padding: '16px',
  backgroundColor: '$gray400',
  '@md': {
    padding: '36px',
  },
  '@lg': {
    padding: '48px 68px',
  },
})
