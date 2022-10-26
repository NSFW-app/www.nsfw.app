import { Stitches } from '@nsfw-app/ui'
import { Text as UIText } from '@nsfw-app/ui'

export const Text = Stitches.styled(UIText, {
  variants: {
    // When extending a variant, we need to define all of them here for the types to work.
    type: {
      // Commonly marked as H3 in the Figma, though is long-form text.
      subhead1: {
        fontSize: '22px',
        fontWeight: 500,
        lineHeight: '28px',
        wordSpacing: 0,
        letterSpacing: '1.2%',
      },
      // Not seen in designs but body1 should
      body1: {
        fontSize: '16px',
        lineHeight: '28px',
      },
      // Marked as P2 in designs
      body2: {
        fontSize: '14px',
        letterSpacing: '1.5%',
        lineHeight: '20px',
      },
      // Unmarked in the designs, see bullet points in OKRs
      body3: {
        fontSize: '13px',
        wordSpacing: 0,
        lineHeight: '16px',
        letterSpacing: '1.5%',
      },
    },
  },
})
