import { Stitches, Flex, Grid, Text, Heading, Icon } from '@nsfw-app/ui'
import { Link } from 'components/Link'
import { DATA } from './data'

const PricingGrid = Stitches.styled(Grid, {
  width: '100%',
  margin: 'auto',
  columnGap: '50px',
})

const Cell = Stitches.styled(Flex, {
  height: '30px',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'start',
  variants: {
    selected: {
      true: {
        paddingLeft: '30px',
        paddingRight: '30px',
        marginLeft: '-30px',
        marginRight: '-30px',
        backgroundColor: '$gray500',
        borderBottom: 'unset',
      },
    },
  },
})

const RowCell = Stitches.styled(Cell, {
  height: '42px',
  borderBottom: `1px solid $gray600`,
  variants: {
    selected: {
      true: {
        '&::before': {
          content: '',
          position: 'absolute',
          inset: '0px 30px',
          borderBottom: `1px solid $gray600`,
        },
      },
    },
  },
})

const SpacerCell = Stitches.styled(Cell, {
  height: '30px',
  border: 'unset',
  variants: {
    selected: {
      true: { '&::before': { borderBottom: 'unset !important' } },
    },
    first: {
      true: { borderTopLeftRadius: '12px', borderTopRightRadius: '12px' },
    },
    last: {
      true: { borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' },
    },
  },
})

const HeaderCell = Stitches.styled(Cell, {
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flex: 1,
})

const RowHeaderCell = Stitches.styled(SpacerCell, {
  height: '60px',
  alignItems: 'flex-end',
})

export const CreatorEarningsTable = () => {
  const selectedCol = Math.max(
    DATA.headers.findIndex((h) => h.selected === true),
    0
  )
  console.log(selectedCol)
  const isSelected = (index: number) => index === selectedCol
  return (
    <PricingGrid
      css={{
        gridTemplateColumns: `repeat(${DATA.headers.length}, auto)`,
      }}
    >
      {/* Top spacer cells  */}
      {DATA.headers.map((_, i) => (
        <SpacerCell
          key={`spacer-top-${i}`}
          className='spacer'
          selected={isSelected(i)}
          first={isSelected(i)}
        />
      ))}

      {/* Headers */}
      {DATA.headers.map((header, headerIndex) => (
        <HeaderCell
          key={`header-${headerIndex}`}
          selected={isSelected(headerIndex)}
        >
          <Heading as='h3'>{header.title}</Heading>
          <Flex center css={{ padding: '16px 0' }}>
            <Heading as='h4'>{header.cost}</Heading>
            <Text subText type='caption1' css={{ paddingLeft: '12px' }}>
              {header.costLabel}
            </Text>
          </Flex>
          {header.action && (
            <Link
              button
              theme='primary'
              css={{ maxHeight: '36px', marginBottom: '16px' }}
              href={header.action.link}
            >
              {header.action.label}
            </Link>
          )}
          {header.subText && (
            <Flex center full>
              <Text subText type='caption3'>
                {header.subText}
              </Text>
            </Flex>
          )}
        </HeaderCell>
      ))}

      {/* grouped rows */}
      {DATA.groups.map((group) => {
        const groupCells = group.label
          ? DATA.headers.map((_, groupCellIndex) => {
              if (groupCellIndex === 0) {
                return (
                  <RowHeaderCell selected={isSelected(groupCellIndex)}>
                    {group.label}
                  </RowHeaderCell>
                )
              }
              return (
                <RowHeaderCell
                  key={`row-header-${group.label}-${groupCellIndex}`}
                  selected={isSelected(groupCellIndex)}
                />
              )
            })
          : []

        const rowCells = group.rows.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <RowCell key={`cell-${cellIndex}`} selected={isSelected(cellIndex)}>
              {/* @ts-ignore TODO */}
              {cell.icon && <Icon icon={cell.icon} />}
              <Text type='caption3'>{cell.label}</Text>
            </RowCell>
          ))
        )
        console.log(groupCells)

        return [...groupCells, ...rowCells]
      })}

      {/* Bottom spacer cells  */}
      {DATA.headers.map((_, i) => (
        <SpacerCell
          key={`spacer-bottom-${i}`}
          className='spacer'
          selected={isSelected(i)}
          last={isSelected(i)}
        />
      ))}
    </PricingGrid>
  )
}
