import { Stitches } from '@nsfw-app/ui'
import { Heading as UIHeading } from '@nsfw-app/ui'

export const Heading = Stitches.styled(UIHeading, {
  variants: {
    as: {
      h1: {
        // TODO: review the md and sm breakpoints by eye across these variants (not explicity in designs)
        lineHeight: '48px',
        wordSpacing: 0,
        '@xs': {
          fontSize: '24px',
          lineHeight: '38px',
        },
        '@md': {
          fontSize: '28px',
        },
        '@lg': {
          fontSize: '32px',
        },
        '@xl': {
          fontSize: '36px',
        },
      },

      // e.g  Structure OKR / #standups heading
      // e.g DOA "Proposals" heading
      h2: {
        fontWeight: 600,
        lineHeight: '36px',
        wordSpacing: 0,
        letterSpacing: '1.2%',
        '@xs': {
          fontSize: '18px',
        },
        '@md': {
          fontSize: '24px',
        },
        '@xl': {
          fontSize: '26px',
        },
      },

      // Marked as h5 and used in testimonial user name
      h5: {
        fontSize: '15px',
        lineHeight: '28px',
        wordSpacing: 0,
        fontWeight: 700,
        letterSpacing: '1.2%',
      },
    },
  },
})
