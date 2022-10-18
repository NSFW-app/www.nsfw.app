import { GridContent, GridSection } from 'components/GridLayout'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'
import { DAO } from './components/Dao'
import { Operate } from './components/Operate'
import { Stitches, Text, Icon, Flex, Heading, Button, Box } from '@nsfw-app/ui'
import { spaces } from 'config'

import { Link } from 'components/Link'
import { Blocks } from './components/Block/Blocks'
import { StructureBlocks } from './components/Block/StructureBlocks'

const FlexLayout = Stitches.styled(Flex, {
  minHeight: '100vh',
  textAlign: 'center',
  justifyContent: 'center',
  marginTop: '0',
  '@xs': {
    marginTop: '18vw',
  },
  '@lg': {
    marginTop: '3vw',
  },
})

export const Structure = () => {
  return (
    <GridSection
      css={{
        backgroundColor: '$gray100',
        position: 'relative',
        '@md': {
          paddingTop: '2vw',
        },
        '@lg': {
          paddingTop: '10vw',
        },
      }}
    >
      <DiagonalBgBreak
        css={{ borderColor: '$gray100 $gray500 $gray100 $gray500' }}
      />
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '2 / 12',
        }}
      >
        <FlexLayout column>
          <Heading as='h2' css={{ marginBottom: spaces[3] }}>
            NSFW App Structure
          </Heading>

          <Flex column center>
            <Flex
              column
              css={{
                gap: '20px',
                maxWidth: '800px',
                justifyContent: 'center',
                textAlign: 'left',
              }}
            >
              <Text type='body1' subText>
                The core team is supported by a dedicated “delegates” group
                responsible for the discussion of sensitive topics before it is
                put to the community for a DAO vote.
              </Text>
              <Text type='body1' subText>
                Within the #delegates group; We are commiting to complete
                transparancy into the workings of various departments, following
                Agile product development best practices.
              </Text>
            </Flex>
          </Flex>

          <StructureBlocks />
        </FlexLayout>
      </GridContent>
    </GridSection>
  )
}
