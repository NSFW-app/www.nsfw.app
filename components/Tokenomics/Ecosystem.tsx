import { Box, Flex } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { InnerGrid } from 'components/About/components/Block/Blocks'
import { GridContent, GridSection } from 'components/GridLayout'
import { ArrowLink } from 'components/ArrowLink'
import { CheckIcon } from 'components/Icons/Check'
import { spaces } from 'config'

const PlatformFeesBullets = ['DMs', 'PetrificationTotalus', 'Wingman Blopster']
const CreatorFeatures = ['DMs', 'PetrificationTotalus', 'Wingman Blopster']

const BulletPoint: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Flex row css={{ gap: '15px', alignItems: 'center' }}>
      <CheckIcon css={{ height: '18px' }} />
      <Text type='body2'>{title}</Text>
    </Flex>
  )
}

export const Ecosystem: React.FC = ({}) => {
  return (
    <GridSection css={{ backgroundColor: '$gray400', paddingTop: '50px' }}>
      <GridContent
        columns={{
          tablet: '1 / 12',
          desktop: '1 / 24',
        }}
      >
        <InnerGrid>
          <Flex
            column
            css={{
              backgroundColor: '$gray300',
              gap: '11px',
              padding: '50px',
              borderRadius: '8px',
              minWidth: '330px',
              justifyContent: 'space-between',
              '@xs': { order: 2 },
              '@lg': {
                maxWidth: '310px',
                order: 2,
                maxHeight: '450px',
              },
            }}
          >
            <Box>
              <Flex
                center
                css={{
                  padding: '10px',
                  backgroundColor: '$gray100',
                  borderRadius: '100%',
                  border: '1px solid $gray500',
                  width: '50px',
                  height: '50px',
                }}
              >
                <Text css={{ fontSize: '30px' }}>💰</Text>
              </Flex>

              <Heading type='h2' css={{ marginTop: '16px' }}>
                Platform Fees
              </Heading>
              <Flex column css={{ gap: '15px', marginTop: spaces[3] }}>
                {PlatformFeesBullets.map((bullet, i) => (
                  <BulletPoint key={bullet + i} title={bullet} />
                ))}
              </Flex>
            </Box>

            <ArrowLink href='#'>Visit the NSFW.app</ArrowLink>
          </Flex>

          <Flex
            column
            css={{
              backgroundColor: '$gray300',
              gap: '11px',
              padding: '50px',
              borderRadius: '8px',
              minWidth: '330px',
              justifyContent: 'space-between',
              '@xs': { order: 3 },
              '@lg': {
                maxWidth: '310px',
                maxHeight: '450px',
                order: 2,
              },
            }}
          >
            <Box>
              <Flex
                center
                css={{
                  padding: '10px',
                  backgroundColor: '$gray100',
                  borderRadius: '100%',
                  border: '1px solid $gray500',
                  width: '50px',
                  height: '50px',
                }}
              >
                <Text css={{ fontSize: '30px' }}>🎨</Text>
              </Flex>
              <Heading type='h2' css={{ marginTop: '16px' }}>
                Creator ‘Pro’ Features
              </Heading>

              <Flex column css={{ gap: '15px', marginTop: spaces[3] }}>
                {CreatorFeatures.map((bullet, i) => (
                  <BulletPoint key={bullet + i} title={bullet} />
                ))}
              </Flex>
            </Box>

            <ArrowLink href='#'>Visit the NSFW.app</ArrowLink>
          </Flex>

          <Flex
            column
            css={{
              gap: '40px',
              marginTop: '-3vw',
              '@xs': { order: 1, textAlign: 'center' },
              '@md': { textAlign: 'left' },
              '@lg': { minWidth: '330px', order: 3 },
              '@xl': { minWidth: '550px' },
            }}
          >
            <Heading type='h1'>NSFW.app Ecosystem</Heading>
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
          </Flex>
        </InnerGrid>

        <Flex center css={{ marginTop: '8vw' }}>
          <Heading type='h1'>Voices from the community</Heading>
        </Flex>
      </GridContent>
    </GridSection>
  )
}
