import { GridContent, GridSection } from 'components/GridLayout'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'
import { Operate } from './components/Operate'
import { TokenSupply } from './components/TokenSupply'

export const BetweenDiagonals: React.FC = ({}) => {
  return (
    <GridSection
      css={{
        backgroundColor: '$gray500',
        position: 'relative',
        paddingBottom: '50px',
      }}
    >
      <DiagonalBgBreak />
      <GridContent
        columns={{
          tablet: '1 / 13',
          desktop: '1 / 13',
        }}
        css={{
          zIndex: 1,
          height: 'auto',
          marginTop: '8vw',
        }}
      >
        {/* <TokenSupply /> */}
        <Operate />
      </GridContent>
    </GridSection>
  )
}
