import { Stitches, Text, Icon, Flex, Heading } from '@nsfw-app/ui'
import { APP_ROUTES, spaces } from 'config'

import { GridContent, GridSection } from 'components/GridLayout'
import { Link } from 'components/Link'
import { NSFW_EVENT, useAnalytics } from 'lib/analytics'

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

export const FansHeroSection = () => {
  const analytics = useAnalytics()
  const handleFeatures = () => {
    console.log('handleFeatures')
  }

  return (
    <GridSection>
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '2 / 12',
        }}
      >
        <HeroFlex center column>
          <Heading css={{ marginBottom: spaces[3] }}>
            Goodbye censored content. Hello privacy.
          </Heading>
          <Text
            type='subhead1'
            subText
            css={{ marginBottom: spaces[1], '@md': { width: '80%' } }}
          >
            Explore & enjoy your favourite uncensored kinks & fetishes from
            global creators with the added bonus of total privacy with Crypto
            payments.
          </Text>
          <Text
            type='subhead1'
            subText
            css={{ margin: `12px 0 ${spaces[4]} 0`, '@md': { width: '80%' } }}
          >
            Show your love by following, tipping, subscribing & PPVs.
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
              href={APP_ROUTES.ADMIRER_SIGNUP}
              onClick={() => analytics.track(NSFW_EVENT.GET_STARTED_CLICK)}
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
