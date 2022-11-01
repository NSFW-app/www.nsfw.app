import { Stitches } from '@nsfw-app/ui'
import { Text as UIText } from '@nsfw-app/ui'

export const Text = Stitches.styled(UIText, {
  variants: {
    // When extending a variant, we need to define all of them here for the types to work.
    type: {
      // Commonly marked as H3 in the Figma, though is long-form text.
      subhead1: {
        fontWeight: 400,
        lineHeight: '32px',
        wordSpacing: 0,
        letterSpacing: '1.2%',
        '@xs': {
          fontSize: '16px',
        },
        '@md': {
          fontSize: '18px',
        },
        '@lg': {
          fontSize: '20px',
        },
      },
      // Not seen in designs but body1 should be standard 16px.
      body1: {
        fontSize: '16px',
        lineHeight: '28px',
        fontWeight: 300,
      },
      // Marked as P2 in designs
      body2: {
        fontSize: '14px',
        fontWeight: 400,
        letterSpacing: '1.5%',
        lineHeight: '20px',
      },
      // Bullet points in OKRs
      body3: {
        fontSize: '14px',
        fontWeight: 500,
        wordSpacing: 0,
        lineHeight: '16px',
        letterSpacing: '1.5%',
      },
      // Button label e.g: Learn more about DAO
      body4: {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '16px',
        letterSpacing: '1.5%',
        color: '$gray900',
      },

      // E.g: OPEN SOURCE
      pill: {
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '16px',
        letterSpacing: '1%',
        backgroundColor: '$gray500',
        display: 'inline',
        padding: '2px 6px',
        borderRadius: '4px',
        color: '$gray800',
      },
    },
  },
})
