import { Stitches, Section } from '@nsfw-app/ui'
import { sizes } from 'config'

/**
 * GridSection
 *
 * Phone - 1 column.
 * Tablet - 8 columns.
 * Desktop - 12 columns.
 */
export const GridSection = Stitches.styled(Section, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  padding: '0 16px',
  gridGap: '16px',
  '@md': {
    gridTemplateColumns: 'repeat(8, 1fr)',
    padding: '0 40px',
  },
  '@lg': {
    padding: '0 100px',
  },
  '@xxl': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    padding: sizes.sectionPadding,
  },
})
