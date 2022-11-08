import { Box, Flex, Stitches } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { GridContent, GridSection } from 'components/GridLayout'
import { ArrowLink } from 'components/ArrowLink'
import { CheckIcon } from 'components/Icons/Check'
import { spaces } from 'config'

const PlatformFeesBullets = ['DMs', 'PetrificationTotalus', 'Wingman Blopster']
const CreatorFeatures = ['DMs', 'PetrificationTotalus', 'Wingman Blopster']

const BulletPoint: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Flex row css={{ gap: '15px', alignItems: 'center' }}>
      <Flex>
        <CheckIcon css={{ height: 14, width: 14 }} />
      </Flex>
      <Text type='body2'>{title}</Text>
    </Flex>
  )
}

const FeatureIcon = Stitches.styled(Flex, {
  padding: '10px',
  backgroundColor: '$gray100',
  borderRadius: '100%',
  border: '1px solid $gray500',
  width: '54px',
  height: '54px',
})

const GridContentFlexContainer = Stitches.styled(Flex, {
  flexDirection: 'column-reverse',
  '@xl': { flexDirection: 'row' },
})

const FeatureHeadingContainer = Stitches.styled(Flex, {
  flexDirection: 'column',
  gap: '40px',
  width: '100%',
  marginBottom: 64,
  '@xs': { textAlign: 'center' },
  '@md': { textAlign: 'left' },
  '@lg': { marginLeft: 48 },
  '@xl': { width: '50%' },
})

const FeatureCards = Stitches.styled(Flex, {
  flexDirection: 'column',
  alignItems: 'center',
  '@md': {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'start',
  },
})

const FeatureCard = Stitches.styled(Flex, {
  backgroundColor: '$gray300',
  gap: '11px',
  padding: '40px',
  borderRadius: '8px',
  justifyContent: 'space-between',
  height: '394px',
  maxWidth: '320px',
  width: '100%',
})

export const Ecosystem: React.FC = ({}) => {
  return (
    <GridSection
      css={{
        backgroundColor: '$gray400',
        '@xs': { paddingTop: '55px' },
        '@lg': { paddingTop: '117px' },
      }}
    >
      <GridContent
        columns={{
          tablet: '1 / 9',
          desktop: '1 / 13',
        }}
      >
        <GridContentFlexContainer>
          <FeatureCards>
            <FeatureCard
              column
              css={{
                '@xs': { marginBottom: 16 },
                '@md': { marginRight: 48, marginBottom: 0 },
              }}
            >
              <Box>
                <FeatureIcon center>
                  <Text css={{ fontSize: '32px' }}>💰</Text>
                </FeatureIcon>

                <Heading as='h2' css={{ marginTop: '16px' }}>
                  Platform Fees
                </Heading>
                <Flex column css={{ gap: '15px', marginTop: spaces[3] }}>
                  {PlatformFeesBullets.map((bullet, i) => (
                    <BulletPoint key={bullet + i} title={bullet} />
                  ))}
                </Flex>
              </Box>

              <ArrowLink href='#'>Visit the NSFW.app</ArrowLink>
            </FeatureCard>

            <FeatureCard column>
              <Box>
                <FeatureIcon center>
                  <Text css={{ fontSize: '32px' }}>🎨</Text>
                </FeatureIcon>
                <Heading as='h2' css={{ marginTop: '16px' }}>
                  Creator ‘Pro’ Features
                </Heading>

                <Flex column css={{ gap: '15px', marginTop: spaces[3] }}>
                  {CreatorFeatures.map((bullet, i) => (
                    <BulletPoint key={bullet + i} title={bullet} />
                  ))}
                </Flex>
              </Box>

              <ArrowLink href='#'>Visit the NSFW.app</ArrowLink>
            </FeatureCard>
          </FeatureCards>

          <FeatureHeadingContainer>
            <Heading as='h1'>NSFW.app Ecosystem</Heading>
            <Text subText type='subhead1'>
              An independent creator marketplace, with a focus on zero commisons
              on creator content, near instant payment settlement, and web3
              anominity for fans. The NSFW token is used on nsfw.app a platform
              where, creators are able to sell their content to fans for a fixed
              cost or a subscription. The app will be eventually be monetised
              via these two methods.
            </Text>
            <Text subText type='subhead1'>
              An independent creator marketplace, with a focus on zero commisons
              The NSFW token is used on nsfw.app a platform where, creators are
              able to sell their content to fans for a fixed cost or a
              subscription.
            </Text>
            <Text subText type='subhead1'>
              The app will be eventually be monetised via these two methods.
            </Text>
          </FeatureHeadingContainer>
        </GridContentFlexContainer>
      </GridContent>
    </GridSection>
  )
}
