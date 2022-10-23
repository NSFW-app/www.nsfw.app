import { Stitches, Text, Icon, Flex, Heading, Button, Box } from '@nsfw-app/ui'
import { spaces } from 'config'

import { GridContent, GridSection } from 'components/GridLayout'
import { Link } from 'components/Link'
import { VectorPurple } from 'components/Icons/VectorPurple'
import { VectorPink } from 'components/Icons/VectorPink'
import { VectorYellow } from 'components/Icons/VectorYellow'
import { InnerGrid } from 'components/About/components/Block/StructureBlocks'

const FlexLayout = Stitches.styled(Flex, {
  justifyContent: 'center',
  gap: '40px',
  '@xs': {
    minHeight: '35vh',
    marginTop: '13vw',
  },
  '@lg': {
    minHeight: '100vh',
    marginTop: '1vw',
    alignItems: 'center',
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
                '@md': {
                  textAlign: 'left',
                  paddingRight: '100px',
                },
              }}
            >
              <Heading as='h2' css={{ marginBottom: spaces[3] }}>
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
                  alignSelf: 'start',
                  width: '80%',
                  whiteSpace: 'nowrap',
                }}
              >
                <Link button uppercase theme='primary' href='#'>
                  Join the discussion
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
