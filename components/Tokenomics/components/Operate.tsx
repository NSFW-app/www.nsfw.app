import { Flex, Icon, Stitches } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { spaces } from 'config'
import { InnerGrid } from 'components/About/components/Block/Blocks'
import { BackgroundBlurIcons } from 'components/BackgroundBlurAsterisk'

const FeatureIcon = Stitches.styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '$gray100',
  borderRadius: '100%',
  border: '1px solid $gray500',
  width: '54px',
  height: '54px',
})

const FeatureCards = Stitches.styled(Flex, {
  flexDirection: 'column',
  gap: '15px',
  zIndex: 2,
  order: 2,
  '@lg': { order: 1 },
})

const FeatureHeadingContainer = Stitches.styled(Flex, {
  '@lg': {
    order: 2,
  },
  [`& > ${Flex}`]: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '30px',
    maxWidth: '580px',
    '@xs': { textAlign: 'center' },
    '@md': { textAlign: 'left' },
  },
})

const FeatureCard = Stitches.styled(Flex, {
  flexDirection: 'column',
  backgroundColor: '$gray300',
  gap: '15px',
  borderRadius: '8px',
})

const TopFeatureCard = Stitches.styled(FeatureCard, {
  width: '50%',
  '@xs': {
    padding: '25px',
    minWidth: '150px',
  },
  '@md': {
    padding: '30px 35px 60px 35px',
    minWidth: '250px',
  },
})

const BottomFeatureCard = Stitches.styled(FeatureCard, {
  padding: '40px',
})

export const Operate: React.FC = ({}) => {
  return (
    <InnerGrid
      css={{
        gridGap: '100px',
        '@lg': { gridTemplateColumns: 'repeat(2,2fr)' },
      }}
    >
      <BackgroundBlurIcons />
      <FeatureCards>
        <Flex row css={{ gap: '15px' }}>
          <TopFeatureCard>
            <FeatureIcon>
              <Text css={{ fontSize: '32px' }}>🎟️</Text>
            </FeatureIcon>

            <Heading as='h2'>Memberships</Heading>
            <Text type='body2' css={{ color: '$gray' }}>
              Soon&trade;
            </Text>
          </TopFeatureCard>

          <TopFeatureCard>
            <FeatureIcon>
              <Text css={{ fontSize: '32px' }}>👁️</Text>
            </FeatureIcon>
            <Heading as='h2'>Rewards</Heading>
            <Text type='body2'>Soon&trade;</Text>
          </TopFeatureCard>
        </Flex>
        <BottomFeatureCard>
          <FeatureIcon center css={{ minHeight: '50px', minWidth: '50px' }}>
            <Icon icon='BadgePolygon' css={{ height: 28, width: 32 }} />
          </FeatureIcon>
          <Heading as='h2' css={{ lineHeight: 1.2 }}>
            Operating on Polygon network, with a multichain strategy.
          </Heading>
        </BottomFeatureCard>
      </FeatureCards>

      <FeatureHeadingContainer center>
        <Flex>
          <Heading as='h1' css={{ '@md': { marginBottom: spaces[3] } }}>
            Value is captured on-chain across ecosystem projects.
          </Heading>
          <Text subText type='subhead1'>
            Participation is front and center to ensure a balanced and
            incentivised community.
          </Text>
        </Flex>
      </FeatureHeadingContainer>
    </InnerGrid>
  )
}
