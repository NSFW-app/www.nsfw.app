import { Box, Flex } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { InnerGrid } from 'components/About/components/Block/Blocks'
import { GridContent, GridSection } from 'components/GridLayout'
import { ArrowLink } from 'components/ArrowLink'

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
              minWidth: '300px',
              justifyContent: 'space-between',
              '@xs': { order: 2 },
              '@lg': {
                maxWidth: '310px',
                order: 2,
                height: '90%',
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
              <Text type='body2' subText css={{ margin: '25px 0' }}>
                Work in the industrsy and can condribute your skills? Become a
                delegate.
              </Text>
            </Box>

            <ArrowLink href='#'>Visit the NSFW.app</ArrowLink>
          </Flex>

          <Flex
            column
            css={{
              backgroundColor: '$gray300',
              gap: '11px',
              padding: '50px',
              height: '90%',
              borderRadius: '8px',
              minWidth: '300px',
              justifyContent: 'space-between',
              '@xs': { order: 3 },
              '@lg': {
                maxWidth: '310px',
                height: '90%',
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
              <Text type='body2' subText css={{ margin: '25px 0' }}>
                Work in the industrsy and can condribute your skills? Become a
                delegate.
              </Text>
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
              '@lg': { minWidth: '450px', order: 3 },
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
