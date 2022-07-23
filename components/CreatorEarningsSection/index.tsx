import { Flex, Grid, Heading, Text, useIsDesktopSize } from '@nsfw-app/ui'
import { GridContent, GridSection } from 'components/GridLayout'
import { Stitches } from '@nsfw-app/ui'
import { lighten } from 'polished'
import { Link } from 'components/Link'
import { APP_ROUTES } from 'config'

const EarningsGrid = Stitches.styled(Grid, {
  width: '100%',
  margin: 'auto',
  gridTemplateColumns: 'repeat(4, auto)',
  columnGap: '0',
  p: {
    fontSize: '11px',
  },
  '@lg': {
    gridTemplateColumns: 'repeat(5, auto)',
  },
})

const EarningsGridItem = Stitches.styled(Flex, {
  height: '42px',
  position: 'relative',
  borderBottom: `1px solid ${Stitches.theme.colors.gray400}`,
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    bold: {
      true: {
        backgroundColor: '$gray600',
      },
    },
    striped: {
      true: {
        backgroundColor: '$gray300',
      },
    },
  },
})

const HeaderRow = Stitches.styled(EarningsGridItem, {
  border: 'none',
  backgroundColor: Stitches.theme.colors.gray300,
})

const rowData = [
  ['$1,000.00', '$1,000.00', '$800.00', '$650.00', '$500.00'],
  ['$2,500.00', '$2,500.00', '$2,000.00', '$1,625.00', '$1,250.00'],
  ['$5,000.00', '$5,000.00', '$4,000.00', '$3,250.00', '$2,500.00'],
  ['$7,500.00', '$7,500.00', '$6,000.00', '$4,875.00', '$3,750.00'],
  ['$10,000.00', '$10,000.00', '$8,000.00', '$6,500.00', '$5,000.00'],
]

export const CreatorEarningsSection = () => {
  const isDesktop = useIsDesktopSize()
  console.log('isDesktop', isDesktop)
  return (
    <GridSection css={{ overflowX: 'auto', paddingBottom: '64px' }}>
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '3 / 11',
        }}
      >
        <Flex column css={{ padding: '24px 8px' }}>
          <Heading as='h2'>Earnings</Heading>
          <Text subText>Some text about earning heaps of red rockets</Text>
          <EarningsGrid css={{ marginTop: '24px' }}>
            <HeaderRow css={{ gridColumn: '2/-1' }}>
              <Text type='caption3'>Platform Fees</Text>
            </HeaderRow>

            {isDesktop && (
              <EarningsGridItem bold>
                <Text type='caption3'>Monthly Revenue</Text>
              </EarningsGridItem>
            )}
            <EarningsGridItem css={{ backgroundColor: '#1a024cc7' }}>
              <Text type='caption3'>0%</Text>
            </EarningsGridItem>
            <EarningsGridItem bold>
              <Text type='caption3'>25%</Text>
            </EarningsGridItem>
            <EarningsGridItem bold>
              <Text type='caption3'>35%</Text>
            </EarningsGridItem>
            <EarningsGridItem bold>
              <Text type='caption3'>50%</Text>
            </EarningsGridItem>

            {rowData.map((row, rowIndex) =>
              row
                // Remove first column if mobile (seems excessive to display)
                .filter((_, rowIndex) => rowIndex !== 0 || isDesktop)
                .map((cell, cellIndex) => {
                  const highlightedIdx = isDesktop ? 1 : 0
                  return (
                    <EarningsGridItem
                      key={`cell-${cellIndex}`}
                      striped={Boolean(
                        cellIndex !== highlightedIdx && rowIndex % 2
                      )}
                      css={
                        cellIndex === highlightedIdx
                          ? {
                              backgroundColor: lighten(
                                rowIndex / 20 + (rowIndex === 1 ? 0.05 : 0),
                                '#1a024cc7'
                              ),
                            }
                          : {}
                      }
                    >
                      <Text type='caption3'>{cell}</Text>
                    </EarningsGridItem>
                  )
                })
            )}

            <HeaderRow
              css={{
                gridColumn: isDesktop ? '2' : '1',
                backgroundColor: '$voilet100',
              }}
            >
              {/* <Text type='caption3'>NSFW.app</Text> */}
              <Link
                button
                theme='primary'
                css={{ height: '100%', padding: 0 }}
                href={APP_ROUTES.APP}
              >
                NSFW.app
              </Link>
            </HeaderRow>
            <HeaderRow css={{ gridColumn: isDesktop ? '3/-1' : '2/-1' }}>
              <Text type='caption3'>Other platforms</Text>
            </HeaderRow>
          </EarningsGrid>
        </Flex>
      </GridContent>
    </GridSection>
  )
}
