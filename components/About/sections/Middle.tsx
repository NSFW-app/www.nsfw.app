import { GridContent, GridSection } from 'components/GridLayout'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'
import { DAO } from '../components/Dao'
import { Operate } from '../components/Operate'

export const MiddleSection = () => {
  return (
    <>
      <GridSection
        css={{
          backgroundColor: '$gray500',
          position: 'relative',
        }}
      >
        <DiagonalBgBreak />
        <GridContent
          css={{
            zIndex: 1,
            height: 'auto',
            marginTop: '10vw',
            '@md': {
              gridColumn: '1 / 9',
            },
            '@xl': {
              gridColumn: '2 / 9',
            },
            '@xxl': {
              gridColumn: '2 / 13',
            },
          }}
        >
          <DAO />
        </GridContent>
      </GridSection>
      <GridSection
        css={{
          backgroundColor: '$gray500',
          position: 'relative',
          paddingBottom: '100px',
        }}
      >
        <GridContent
          css={{
            zIndex: 1,
            height: 'auto',
            marginTop: '5vw',
            '@md': {
              gridColumn: '1 / 9',
            },
            '@xl': {
              gridColumn: '1 / 8',
            },
            '@xxl': {
              gridColumn: '1 / 12',
            },
          }}
        >
          <Operate />
        </GridContent>
      </GridSection>
    </>
  )
}
