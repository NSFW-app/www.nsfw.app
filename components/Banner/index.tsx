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
    height: '100px',
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
        Disclaimer: Cryptocurrency tokens are created and distributed using
        distributed ledger or blockchain technology. This technology is very
        experimental; therefore, participating in cryptocurrency token sales is
        very risky.{' '}
      </Text>
    </BannerContainer>
  )
}
