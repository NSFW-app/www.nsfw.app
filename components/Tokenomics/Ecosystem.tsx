import { Box, Button, Flex, Heading, Text } from '@nsfw-app/ui'
import { InnerGrid } from 'components/About/components/Block/Blocks'
import { GridContent, GridSection } from 'components/GridLayout'

export const Ecosystem: React.FC = ({}) => {
  return (
    <GridSection css={{ backgroundColor: '$gray400', paddingTop: '100px' }}>
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
              padding: '40px 30px',

              borderRadius: '8px',
              minWidth: '280px',
              justifyContent: 'space-between',
              '@lg': {
                maxWidth: '310px',
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

              <Heading as='h4' css={{ marginTop: '16px' }}>
                Platform Fees
              </Heading>
              <Text type='body2' subText css={{ margin: '25px 0' }}>
                Work in the industrsy and can condribute your skills? Become a
                delegate.
              </Text>
            </Box>

            <Button theme='primary' css={{ padding: '10px', fontWeight: 400 }}>
              View delegate proposals
            </Button>
          </Flex>

          <Flex
            column
            css={{
              backgroundColor: '$gray300',
              gap: '11px',
              padding: '40px 30px',

              borderRadius: '8px',
              minWidth: '280px',
              justifyContent: 'space-between',
              '@lg': {
                maxWidth: '310px',
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
              <Heading as='h4' css={{ marginTop: '16px' }}>
                Creator ‘Pro’ Features
              </Heading>
              <Text type='body2' subText css={{ margin: '25px 0' }}>
                Work in the industrsy and can condribute your skills? Become a
                delegate.
              </Text>
            </Box>

            <Button theme='primary' css={{ padding: '10px', fontWeight: 400 }}>
              View delegate proposals
            </Button>
          </Flex>

          <Flex
            column
            css={{
              gap: '40px',
              marginTop: '-1vw',
              '@lg': { minWidth: '450px' },
              '@xl': { minWidth: '550px' },
            }}
          >
            <Heading as='h3'>NSFW.app Ecosystem</Heading>
            <Text subText type='body1'>
              An independent creator marketplace, with a focus on zero commisons
              on creator content, near instant payment settlement, and web3
              anominity for fans. The NSFW token is used on nsfw.app a platform
              where, creators are able to sell their content to fans for a fixed
              cost or a subscription. The app will be eventually be monetised
              via these two methods.
            </Text>
            <Text subText type='body1'>
              An independent creator marketplace, with a focus on zero commisons
              The NSFW token is used on nsfw.app a platform where, creators are
              able to sell their content to fans for a fixed cost or a
              subscription.
            </Text>
            <Text subText type='body1'>
              The app will be eventually be monetised via these two methods.
            </Text>
          </Flex>
        </InnerGrid>

        <Flex center css={{ marginTop: '10vw' }}>
          <Heading as='h4'>Voices from the community</Heading>
        </Flex>
      </GridContent>
    </GridSection>
  )
}
