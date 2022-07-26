import {
  Flex,
  Text,
  Heading,
  Icon,
  GroupedComparisonGrid,
  RowCell,
  SpacerCell,
  HeaderCell,
  RowHeaderCell,
} from '@nsfw-app/ui'
import { Link } from 'components/Link'
import { DATA } from './data'

export const CreatorFeesTable = () => {
  const selectedCol = Math.max(
    DATA.headers.findIndex((h) => h.selected === true),
    0
  )
  const isSelected = (index: number) => index === selectedCol
  return (
    <GroupedComparisonGrid
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
          top={isSelected(i)}
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

        return [...groupCells, ...rowCells]
      })}

      {/* Bottom spacer cells  */}
      {DATA.headers.map((_, i) => (
        <SpacerCell
          key={`spacer-bottom-${i}`}
          className='spacer'
          selected={isSelected(i)}
          bottom={isSelected(i)}
        />
      ))}
    </GroupedComparisonGrid>
  )
}
