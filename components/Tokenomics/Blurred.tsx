import { GridContent, GridSection } from 'components/GridLayout'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'
import { Operate } from './components/Operate'
import { TokenSupply } from './components/TokenSupply'

export const Blurred2: React.FC = ({}) => {
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
          tablet: '1 / 12',
          desktop: '1 / 24',
        }}
        css={{
          zIndex: 1,
          height: 'auto',
          marginTop: '12vw',
        }}
      >
        <Operate />
        <TokenSupply />
        {/* <DAO /> */}
        {/* <Flex center>
          <TokenomicsGraph
            css={{ '@xs': { display: 'none' }, '@md': { display: 'block' } }}
          />
        </Flex> */}
      </GridContent>
    </GridSection>
  )
}
