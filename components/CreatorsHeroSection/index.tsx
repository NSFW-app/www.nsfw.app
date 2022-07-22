import { Stitches, Text, Icon, Button, Flex, Heading } from '@nsfw-app/ui'
import { APP_ROUTES, spaces } from 'config'

import { GridContent, GridSection } from 'components/GridLayout'
import { Link } from 'components/Link'
import { useRouter } from 'next/router'

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

export const CreatorsHeroSection = () => {
  const handleFeatures = () => {
    console.log('handleFeatures')
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
          <Heading css={{ marginBottom: spaces[3] }}>
            Goodbye censored content. Hello privacy.
          </Heading>
          <Text
            type='body1'
            subText
            css={{ marginBottom: spaces[4], '@md': { width: '80%' } }}
          >
            Empowering creators with 0% fees, freedom of expression, instant
            withdrawals, privacy with Crypto payments, mental health support &
            adult marketing.
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
            <Link button theme='primary' css={buttonCss} href='#features'>
              Features
            </Link>
            <Link
              button
              theme='secondary'
              css={buttonCss}
              href={APP_ROUTES.CREATOR_SIGNUP}
            >
              Get started
              <Icon icon='Arrow' css={{ paddingLeft: spaces[1], height: 0 }} />
            </Link>
          </Flex>
        </HeroFlex>
      </GridContent>
    </GridSection>
  )
}
