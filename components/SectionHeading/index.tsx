import { Flex, Heading, Text, Stitches } from '@nsfw-app/ui'

export const SectionHeading = Stitches.styled(Flex, {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  backgroundColor: 'transparent',
  margin: '36px 68px',

  [`${Heading}`]: {
    marginBottom: '22px',
  },
  [`${Text}`]: {
    marginBottom: '16px',
  },
})
