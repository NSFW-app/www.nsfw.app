import { Stitches, Icon, Flex, Box } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { spaces } from 'config'
import { GridContent, GridSection } from 'components/GridLayout'
import { Link } from 'components/Link'
import { Blocks } from '../components/Block/Blocks'

const FlexLayout = Stitches.styled(Flex, {
  textAlign: 'center',
  justifyContent: 'center',
})

export const TopSection = () => {
  return (
    <GridSection css={{ paddingTop: '10vh', '@lg': { paddingTop: '20vh' } }}>
      <GridContent
        columns={{
          tablet: '1 / 9',
          desktop: '1 / 13',
        }}
      >
        <FlexLayout column>
          <Heading
            as='h1'
            css={{
              marginBottom: spaces[3],
            }}
          >
            Not Safe for Work (NSFW) is an Impact DAO
          </Heading>

          <Text
            type='subhead1'
            subText
            css={{ marginBottom: spaces[4], lineHeight: '28px' }}
          >
            NSFW focusses to provide stable services to content creators and
            rewarding long-term participants through the use of Web3 technology.
          </Text>

          <Blocks />

          <Box
            css={{
              '@xs': { width: '80%', marginTop: '10vw' },
              '@lg': { width: '50%', marginTop: '4vw' },
              alignSelf: 'center',
              alignItems: 'center',
              svg: {
                transform: 'translateX(0)',
                transition: '0.2s',
              },
              ':hover': {
                svg: {
                  transform: 'translateX(4px)',
                  transition: '0.3s',
                },
              },
            }}
          >
            <Link
              button
              theme='primary'
              href='#'
              css={{
                '@xs': { marginBottom: '50px' },
                '@lg': { marginBottom: '0px' },
              }}
            >
              <Text type='body4' css={{ color: '$gray900' }}>
                {' '}
                Learn more about the DAO
              </Text>
              <Icon icon='Arrow' css={{ paddingLeft: spaces[1], height: 0 }} />
            </Link>
          </Box>
        </FlexLayout>
      </GridContent>
    </GridSection>
  )
}
