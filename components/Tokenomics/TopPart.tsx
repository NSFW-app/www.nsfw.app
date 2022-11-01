import { Stitches, Icon, Flex, Box } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { spaces } from 'config'
import { GridContent, GridSection } from 'components/GridLayout'
import { Link } from 'components/Link'
import { InnerGrid } from 'components/About/components/Block/StructureBlocks'
import { BlopsComponents } from 'components/About/components/BlopsComponents'

const FlexLayout = Stitches.styled(Flex, {
  gap: '40px',
  justifyContent: 'center',
  alignItems: 'center',
})

export const TopPart: React.FC = ({}) => {
  return (
    <GridSection css={{ paddingTop: '5vh', '@lg': { paddingTop: '10vh' } }}>
      <GridContent
        css={{
          minHeight: '50vh',
          '@lg': { minHeight: '550px' },
          '@xl': { minHeight: '620px' },
        }}
        columns={{
          tablet: '1 / 9',
          desktop: '2 / 13',
        }}
      >
        <FlexLayout row css={{ width: '100%' }}>
          <InnerGrid>
            <Flex
              column
              css={{
                '@xs': {
                  textAlign: 'center',
                  minWidth: '350px',
                },
                '@md': {
                  textAlign: 'left',
                },
                '@lg': {
                  maxWidth: '500px',
                },
              }}
            >
              <Heading
                as='h1'
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
                  alignSelf: 'center',
                  '@lg': { alignSelf: 'start' },
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

            <BlopsComponents />
          </InnerGrid>
        </FlexLayout>
      </GridContent>
    </GridSection>
  )
}
