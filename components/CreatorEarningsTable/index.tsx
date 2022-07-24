import {
  Stitches,
  Flex,
  Grid,
  Text,
  useIsDesktopSize,
  useHasMounted,
} from '@nsfw-app/ui'
import { lighten } from 'polished'
import { Link } from 'components/Link'
import { APP_ROUTES } from 'config'

const ROW_DATA = [
  ['$1,000.00', '$1,000.00', '$800.00', '$650.00', '$500.00'],
  ['$2,500.00', '$2,500.00', '$2,000.00', '$1,625.00', '$1,250.00'],
  ['$5,000.00', '$5,000.00', '$4,000.00', '$3,250.00', '$2,500.00'],
  ['$7,500.00', '$7,500.00', '$6,000.00', '$4,875.00', '$3,750.00'],
  ['$10,000.00', '$10,000.00', '$8,000.00', '$6,500.00', '$5,000.00'],
]
const BASE_HIGHLIGHT_COLOR = '#220e4c'
const INCREMENT_DIVISOR = 20

const EarningsGrid = Stitches.styled(Grid, {
  backgroundColor: 'transparent',
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

const EarningsCell = Stitches.styled(Flex, {
  height: '42px',
  position: 'relative',
  borderBottom: `1px solid $gray400`,
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

const EarningsHeaderRow = Stitches.styled(EarningsCell, {
  border: 'none',
  backgroundColor: '$gray400',
})

export const CreatorEarningsTable = () => {
  const isDesktop = useIsDesktopSize()
  const isMounted = useHasMounted()

  // render client side only
  if (!isMounted) return null

  return (
    <EarningsGrid css={{ marginTop: '24px' }}>
      <EarningsHeaderRow css={{ gridColumn: '2/-1' }}>
        <Text type='caption3'>Platform Fees</Text>
      </EarningsHeaderRow>

      {isDesktop && (
        <EarningsCell bold>
          <Text type='caption3'>Monthly Revenue</Text>
        </EarningsCell>
      )}
      <EarningsCell css={{ backgroundColor: BASE_HIGHLIGHT_COLOR }}>
        <Text type='caption3'>0%</Text>
      </EarningsCell>
      <EarningsCell bold>
        <Text type='caption3'>25%</Text>
      </EarningsCell>
      <EarningsCell bold>
        <Text type='caption3'>35%</Text>
      </EarningsCell>
      <EarningsCell bold>
        <Text type='caption3'>50%</Text>
      </EarningsCell>

      {ROW_DATA.map((row, rowIndex) =>
        row
          // Remove first column if mobile (seems excessive to display)
          .filter((_, rowIndex) => rowIndex !== 0 || isDesktop)
          .map((cell, cellIndex) => {
            const highlightedIdx = isDesktop ? 1 : 0
            return (
              <EarningsCell
                key={`cell-${cellIndex}`}
                striped={Boolean(cellIndex !== highlightedIdx && rowIndex % 2)}
                css={
                  // Highlighted column
                  cellIndex === highlightedIdx
                    ? {
                        backgroundColor: lighten(
                          // lighten percentage incremented.
                          rowIndex / INCREMENT_DIVISOR +
                            // Add an additional notch (as the header is manually set above "0%").
                            1 / INCREMENT_DIVISOR,
                          BASE_HIGHLIGHT_COLOR
                        ),
                      }
                    : {}
                }
              >
                <Text type='caption3'>{cell}</Text>
              </EarningsCell>
            )
          })
      )}

      <EarningsHeaderRow
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
      </EarningsHeaderRow>
      <EarningsHeaderRow css={{ gridColumn: isDesktop ? '3/-1' : '2/-1' }}>
        <Text type='caption3'>Other platforms</Text>
      </EarningsHeaderRow>
    </EarningsGrid>
  )
}
