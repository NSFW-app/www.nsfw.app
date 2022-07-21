import { Stitches, Text, Icon, Button, Flex, Heading } from '@nsfw/ui'
import { spaces } from 'config'

import { GridContent, GridSection } from 'components/GridLayout'

const HeroFlex = Stitches.styled(Flex, {
  height: '100vh',
  minHeight: '600px',
  textAlign: 'center',
})

const buttonCss = {
  margin: `0 ${spaces[1]} ${spaces[2]} ${spaces[1]}`,
  '@sm': {
    maxWidth: '236px',
  },
}

export const HeroSection = () => {
  const handleFeatures = () => {
    console.log('handleFeatures')
  }

  const handleGetStarted = () => {
    console.log('handleGetStarted')
  }

  return (
    <GridSection>
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '3 / 11',
        }}
      >
        <HeroFlex center column>
          {/* <Text type='body2' css={{ marginBottom: spaces[4] }}>
            Open Public Beta
          </Text> */}
          <Heading css={{ marginBottom: spaces[3] }}>
            Goodbye censorship. Hello freedom.
          </Heading>
          <Text
            type='body1'
            subText
            css={{ marginBottom: spaces[4], '@md': { width: '80%' } }}
          >
            We empower creators and their communities using Web3 technology.
          </Text>
          <Flex
            fullWidth
            center
            column
            css={{
              '@sm': {
                flexDirection: 'row',
              },
            }}
          >
            <Button theme='primary' css={buttonCss} onClick={handleFeatures}>
              Features
            </Button>
            <Button
              theme='secondary'
              css={buttonCss}
              onClick={handleGetStarted}
            >
              <p style={{ margin: 0 }}>Get started</p>
              <Icon icon='Arrow' css={{ paddingLeft: spaces[1] }} />
            </Button>
          </Flex>
        </HeroFlex>
      </GridContent>
    </GridSection>
  )
}
