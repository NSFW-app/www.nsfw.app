import { Box, Stitches } from '@nsfw-app/ui'

export const DiagonalBgBreak = Stitches.styled(Box, {
  position: 'absolute',
  top: 0,
  left: 0,
  borderStyle: 'solid',
  borderWidth: '0 100vw 12vw 0',
  borderColor: '$gray500 $gray100 $gray500 $gray500',
  marginLeft: '-4px', // account for webkit scrollbar width
})
