import { Box, Button, Flex, Grid, Heading, Text } from '@nsfw-app/ui'
import { GridContent, GridSection } from 'components/GridLayout'
import Image from 'next/image'

import { SwiperComponent } from './Swiper'

export const Ecosystem: React.FC = ({}) => {
  return (
    <GridSection css={{ backgroundColor: '$gray400', paddingTop: '100px' }}>
      <GridContent
        columns={{
          tablet: '1 / 12',
          desktop: '1 / 24',
        }}
      >
        <Grid css={{ gridTemplateColumns: 'repeat(2,2fr)', columnGap: '80px' }}>
          <Flex row css={{ gap: '30px' }}>
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
                <Image
                  src='/svg/hand-shake.svg'
                  height='54px'
                  width='54px'
                  layout='fixed'
                  alt='diamond'
                />
                <Heading as='h4' css={{ marginTop: '16px' }}>
                  Delegates
                </Heading>
                <Text type='body2' subText css={{ margin: '25px 0' }}>
                  Work in the industrsy and can condribute your skills? Become a
                  delegate.
                </Text>
              </Box>

              <Button
                theme='primary'
                css={{ padding: '10px', fontWeight: 400 }}
              >
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
                <Image
                  src='/svg/hand-shake.svg'
                  height='54px'
                  width='54px'
                  layout='fixed'
                  alt='diamond'
                />
                <Heading as='h4' css={{ marginTop: '16px' }}>
                  Delegates
                </Heading>
                <Text type='body2' subText css={{ margin: '25px 0' }}>
                  Work in the industrsy and can condribute your skills? Become a
                  delegate.
                </Text>
              </Box>

              <Button
                theme='primary'
                css={{ padding: '10px', fontWeight: 400 }}
              >
                View delegate proposals
              </Button>
            </Flex>
          </Flex>
          <Flex
            column
            css={{ gap: '40px', marginTop: '-1vw', maxWidth: '500px' }}
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
        </Grid>
        <Flex center css={{ marginTop: '10vw' }}>
          <Heading as='h4'>Voices from the community</Heading>
        </Flex>
      </GridContent>
    </GridSection>
  )
}
