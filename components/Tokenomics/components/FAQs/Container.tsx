import { Button, Stitches } from '@nsfw-app/ui'

export const FaqContainer = Stitches.styled(Button, {
  width: '100%',
  position: 'relative',
  justifyContent: 'center',
  textAlign: 'left',
  alignItems: 'start',
  gap: '13px',
  flexDirection: 'column',
  backgroundColor: '$gray400',
  borderRadius: '8px',
  marginTop: '20px ',
  boxShadow: '0px 8px 20px rgba(55, 55, 55, 0.15)',
  ':hover': {
    a: { borderBottom: '1px solid $violet300' },
  },
  '@xs': {
    minHeight: '100px',
    padding: '20px 50px 20px 20px',
  },
  '@md': {
    minHeight: '120px',
    padding: '30px 120px 30px 40px',
  },
})
