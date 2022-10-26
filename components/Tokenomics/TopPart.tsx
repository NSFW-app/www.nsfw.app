import { Stitches, Icon, Flex, Box } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { spaces } from 'config'
import { GridContent, GridSection } from 'components/GridLayout'
import { Link } from 'components/Link'
import { VectorPurple } from 'components/Icons/VectorPurple'
import { VectorPink } from 'components/Icons/VectorPink'
import { VectorYellow } from 'components/Icons/VectorYellow'
import { InnerGrid } from 'components/About/components/Block/StructureBlocks'

const FlexLayout = Stitches.styled(Flex, {
  gap: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  '@xs': {
    minHeight: '40vh',
    marginTop: '18vw',
  },
  '@lg': {
    minHeight: '100vh',
    marginTop: '2vw',
  },
})

export const TopPart: React.FC = ({}) => {
  return (
    <GridSection>
      <GridContent
        columns={{
          tablet: '1 / 12',
          desktop: '1 / 24',
        }}
      >
        <FlexLayout row css={{ overflowX: 'hidden', width: '100%' }}>
          <InnerGrid>
            <Flex
              column
              css={{
                '@xs': {
                  textAlign: 'center',
                },
                '@md': {
                  textAlign: 'left',
                  paddingRight: '100px',
                },
              }}
            >
              <Heading
                type='h1'
                css={{
                  marginBottom: spaces[3],
                }}
              >
                NSFW+ tokenomics
              </Heading>

              <Text
                type='subhead1'
                subText
                css={{ marginBottom: spaces[4], wordBreak: 0 }}
              >
                Nisl rhoncus mattis rhoncus urna neque viverra justo nec
                ultrices dui sapien eget mi proin sed libero enim sed faucibus
                turpis in eu mi bibendum.
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
                  <Text type='body4'>Join the discussion</Text>
                  <Icon
                    icon='Arrow'
                    css={{ paddingLeft: spaces[1], height: 0 }}
                  />
                </Link>
              </Box>
            </Flex>
            <Flex
              css={{
                width: '100px',
                position: 'relative',
                top: -100,
                '@xs': { display: 'none' },
                '@lg': { display: 'flex' },
              }}
            >
              <VectorPink css={{ position: 'absolute', top: -190 }} />
              <VectorPurple
                css={{ position: 'absolute', left: 50, top: 250 }}
              />
              <VectorPurple css={{ position: 'absolute', left: 260 }} />
              <VectorYellow
                css={{ position: 'absolute', left: -50, bottom: 0 }}
              />
              <VectorYellow
                css={{ position: 'absolute', left: 450, top: 100 }}
              />
              <VectorYellow
                css={{ position: 'absolute', left: 310, top: 200 }}
              />
            </Flex>
          </InnerGrid>
        </FlexLayout>
      </GridContent>
    </GridSection>
  )
}
