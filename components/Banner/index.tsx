import { Flex, Stitches } from '@nsfw-app/ui'
import { Text } from 'components/Typography'

const BannerContainer = Stitches.styled(Flex, {
  width: '100%',
  //   position: 'sticky',
  backgroundColor: '$voilet100',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  '@xs': {
    height: '70px',
    padding: '0 10px ',
  },
  '@md': {
    height: '49px',
    padding: '0 10%',
  },
})

export const Banner = () => {
  return (
    <BannerContainer>
      <Text type='banner'>
        Disclaimer: The content provided here is for informational purposes
        only, and should not be relied upon as legal, business, investment, or
        tax advice.
      </Text>
    </BannerContainer>
  )
}
