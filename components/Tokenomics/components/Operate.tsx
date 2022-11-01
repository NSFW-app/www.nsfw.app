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
              <Text css={{ fontSize: '32px' }}>💸</Text>
            </FeatureIcon>

            <Heading as='h2'>Share the platform fees</Heading>
            <Text type='body2'>
              XX% of platform fees are earned by NSFW stakers and lockers.
            </Text>
          </TopFeatureCard>

          <TopFeatureCard>
            <FeatureIcon>
              <Text css={{ fontSize: '32px' }}>⚡</Text>
            </FeatureIcon>
            <Heading as='h2'>Fast creator withdrawals</Heading>
            <Text type='body2'>Creators are able to cash out.</Text>
          </TopFeatureCard>
        </Flex>
        <BottomFeatureCard>
          <FeatureIcon center css={{ minHeight: '50px', minWidth: '50px' }}>
            <Icon icon='BadgePolygon' css={{ height: 28, width: 32 }} />
          </FeatureIcon>
          <Heading as='h2' css={{ lineHeight: 1.2 }}>
            We will be operating on the Polygon to enjoy low-cost fee
            environment.
          </Heading>
        </BottomFeatureCard>
      </FeatureCards>

      <FeatureHeadingContainer center>
        <Flex>
          <Heading as='h1' css={{ '@md': { marginBottom: spaces[3] } }}>
            The NSFW+ token captures value from all ecosystem projects.
          </Heading>

          <Text type='subhead1' subText>
            Each project will have its own way of generating revenue within the
            ecosystem, but the mandate across all projects share a common theme.
            Drive value to token holders with the mandate of empowering and
            rewarding content creators, fans and community members.
          </Text>
          <Text type='subhead1' subText>
            Drive value to token holders with the mandate of empowering and
            rewarding content creators, fans and community members.
          </Text>
        </Flex>
      </FeatureHeadingContainer>
    </InnerGrid>
  )
}
