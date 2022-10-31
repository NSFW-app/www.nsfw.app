import { Box, Flex, Icon, Grid } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { InnerGrid } from 'components/About/components/Block/StructureBlocks'
import { CheckIcon } from 'components/Icons/Check'
import { Link } from 'components/Link'
import { spaces } from 'config'
import { GridContent, GridSection } from 'components/GridLayout'

export const Features: React.FC = ({}) => {
  const features = [
    'Lock up to 48 months',
    'Exit with penalty',
    'Consumable voting power to access execlusive perks',
    'Boosted voting power',
    'Boosted % of protocol revenue from all ecosystem projects',
    'Special role in Discord',
  ]
  return (
    <GridSection>
      <GridContent
        columns={{
          tablet: '1 / 13',
          desktop: '1 / 13',
        }}
      >
        <InnerGrid css={{ margin: '7vw 0' }}>
          <Flex
            column
            css={{
              gap: '30px',
              marginTop: '20px',
            }}
          >
            <Heading
              as='h1'
              css={{
                '@xs': { textAlign: 'center' },
                '@md': { textAlign: 'left' },
              }}
            >
              Lockers are also bestowed a non-transferable token
            </Heading>
            <Text
              subText
              type='subhead1'
              css={{
                '@xs': { textAlign: 'center' },
                '@md': { textAlign: 'left' },
              }}
            >
              These tokens can boost their voting weights and have the
              opportunity to “consume” their boosted voting power to participate
              in NFT purchases that are only accessible to veNSFW holders that
              confer application rewards and discounts.
            </Text>
            <Box
              css={{
                marginTop: '1vw',
                width: '80%',
                whiteSpace: 'nowrap',
                '@xs': { alignSelf: 'center' },
                '@md': { alignSelf: 'start' },
              }}
            >
              <Link button theme='primary' href='#'>
                Join the discussion
                <Icon
                  icon='Arrow'
                  css={{ paddingLeft: spaces[1], height: 0 }}
                />
              </Link>
            </Box>
          </Flex>

          <Flex column css={{ gap: '15px', marginTop: '1.5vw' }}>
            <Heading as='h2' css={{ color: '$gray800' }}>
              Proposed features
            </Heading>

            <Grid
              css={{
                '@xs': { gridTemplateColumns: 'repeat(1,1fr)' },
                '@sm': { gridTemplateColumns: 'repeat(2,1fr)' },
                gridGap: '15px',
              }}
            >
              {features.map((text) => (
                <Flex
                  row
                  key={text}
                  css={{
                    minHeight: '70px',
                    backgroundColor: '$gray400',
                    alignItems: 'center',
                    borderRadius: '8px',
                    padding: '20px',
                    gap: '10px',
                  }}
                >
                  <Box css={{ minWidth: '21px' }}>
                    <CheckIcon />
                  </Box>
                  <Text type='body2'>{text}</Text>
                </Flex>
              ))}
            </Grid>
          </Flex>
        </InnerGrid>
      </GridContent>
    </GridSection>
  )
}
