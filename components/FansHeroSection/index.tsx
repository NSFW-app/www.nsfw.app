import { Stitches, Text, Icon, Button, Flex, Heading } from '@nsfw-app/ui'
import { APP_ROUTES, spaces } from 'config'

import { GridContent, GridSection } from 'components/GridLayout'
import { Link } from 'components/Link'

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
            Goodbye censorship. Hello freedom.
          </Heading>
          <Text
            type='subhead1'
            subText
            css={{ marginBottom: spaces[4], '@md': { width: '80%' } }}
          >
            Discover & unlock your favourite Adult content using crypto
            payments.
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
