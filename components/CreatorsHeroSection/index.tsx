import { Stitches, Text, Icon, Button, Flex, Heading } from '@nsfw-app/ui'
import { APP_ROUTES, spaces } from 'config'

import { GridContent, GridSection } from 'components/GridLayout'
import { Link } from 'components/Link'
import { NSFW_EVENT, useAnalytics } from 'lib/analytics'

const HeroFlex = Stitches.styled(Flex, {
  height: '55vh',
  // minHeight: '600px',
  textAlign: 'center',
})

const buttonCss = {
  margin: `0 ${spaces[1]} ${spaces[2]} ${spaces[1]}`,
  '@sm': {
    maxWidth: '236px',
  },
}

export const CreatorsHeroSection = () => {
  const analytics = useAnalytics()
  return (
    <GridSection>
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '2 / 13',
        }}
      >
        <HeroFlex center column>
          <Heading
            as='h1'
            css={{ marginBottom: spaces[3], marginTop: spaces[5] }}
          >
            Are you a content creator?
          </Heading>
          <Text
            type='subhead1'
            subText
            css={{ marginBottom: spaces[4], '@md': { width: '80%' } }}
          >
            We offer near-instant payments and withdrawals and 0% fees.
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
            <Link
              button
              uppercase
              theme='primary'
              css={buttonCss}
              href={APP_ROUTES.CREATOR_SIGNUP}
              onClick={() => analytics.track(NSFW_EVENT.GET_STARTED_CLICK)}
            >
              Sign up
              <Icon icon='Arrow' css={{ paddingLeft: spaces[1], height: 0 }} />
            </Link>
          </Flex>
        </HeroFlex>
      </GridContent>
    </GridSection>
  )
}
