import { GridContent, GridSection } from 'components/GridLayout'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'
import { DAO } from '../components/Dao'
import { Operate } from '../components/Operate'

export const MiddleSection = () => {
  return (
    <GridSection
      css={{
        backgroundColor: '$gray500',
        position: 'relative',
        paddingBottom: '100px',
      }}
    >
      <DiagonalBgBreak />
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '1 / 24',
        }}
        css={{
          zIndex: 1,
          height: 'auto',
          marginTop: '16vw',
        }}
      >
        <DAO />
        <Operate />

      </GridContent>
    </GridSection>
  )
}
