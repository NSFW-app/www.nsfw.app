import { Stitches, Section } from '@nsfw-app/ui'

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
  '@xxl': {
    gridTemplateColumns: 'repeat(12, 1fr)',
    // Horizontal padding measured from design file:
    // 2p + 1328 = 100vw
    padding: '0 calc(50vw - 664px)',
  },
})
