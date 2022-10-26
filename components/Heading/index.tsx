import { Stitches } from '@nsfw-app/ui'
import { Heading as UIHeading } from '@nsfw-app/ui'

export const Heading = Stitches.styled(UIHeading, {
  variants: {
    type: {
      h1: {
        // TODO: review the md and sm breakpoints by eye across these variants (not explicity in designs)
        lineHeight: '38px',
        wordSpacing: 0,
        '@xs': {
          fontSize: '24px',
        },
        '@md': {
          fontSize: '30px',
        },
        '@xl': {
          fontSize: '38px',
        },
      },
      h2: {
        // e.g DOA "Proposals" heading
        lineHeight: '36px',
        wordSpacing: 0,
        fontWeight: 700,
        '@xs': {
          fontSize: '22px',
        },
        '@md': {
          fontSize: '24px',
        },
        '@xl': {
          fontSize: '28px',
        },
      },

      // Structure block heading e.g OKR / #standups
      h3: {
        fontSize: '28px',
        fontWeight: 700,
        lineHeight: '36px',
        wordSpacing: 0,
        letterSpacing: '1.2%',
        // '@md': {
        //   fontSize: '20px',
        // },
        // '@lg': {
        //   fontSize: '22px',
        // },
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
