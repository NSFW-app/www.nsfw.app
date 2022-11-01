import { Stitches, Box } from '@nsfw-app/ui'

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
  // deprecate this.. just use the css api.
  columns = defaultColumns,
  css,
}) => {
  return (
    <Box
      css={{
        gridColumn: '1',
        ...css,
        '@md': {
          gridColumn: columns['tablet'],
          ...css?.['@md'],
        },
        '@xxl': {
          gridColumn: columns['desktop'],
          ...css?.['@xxl'],
        },
      }}
    >
      {children}
    </Box>
  )
}
