import { GridContent, GridSection } from 'components/GridLayout'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'
import { Stitches, Flex } from '@nsfw-app/ui'
import { StructureBlocks } from '../components/Block/StructureBlocks'
import { StructureHeading } from '../components/StructureHeading'

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

export const BottomSection = () => {
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
          desktop: '1 / 24',
        }}
      >
        <FlexLayout column>
          <StructureHeading />
          <StructureBlocks />
        </FlexLayout>
      </GridContent>
    </GridSection>
  )
}
