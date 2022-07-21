import { Stitches, Box } from '@nsfw/ui'

interface GridColumns {
  tablet: string
  desktop: string
}

// Defaults to full width
const defaultColumns: GridColumns = {
  tablet: '1 / 9',
  desktop: '1 / 13',
}

interface Props extends Stitches.CSSProp {
  columns?: GridColumns
}

/**
 * GridContent should always be rendered inside a GridSection
 */
export const GridContent: React.FC<Props> = ({
  children,
  columns = defaultColumns,
  css,
}) => {
  return (
    <Box
      css={{
        gridColumn: '1',
        '@md': {
          gridColumn: columns['tablet'],
        },
        '@xxl': {
          gridColumn: columns['desktop'],
        },
        ...css,
      }}
    >
      {children}
    </Box>
  )
}
