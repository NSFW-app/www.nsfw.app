import { Stitches } from '@nsfw-app/ui'
import { Heading as UIHeading } from '@nsfw-app/ui'

export const Heading = Stitches.styled(UIHeading, {
  variants: {
    type: {
      h1: {
        fontSize: '32px',
        // TODO: review the md and sm breakpoints by eye across these variants (not explicity in designs)
        lineHeight: '28px',
        wordSpacing: 0,
        '@md': {
          fontSize: '32px',
        },
        '@lg': {
          fontSize: '38px',
        },
      },
      h2: {
        // e.g DOA "Proposals" heading
        fontSize: '24px',
        lineHeight: '36px',
        wordSpacing: 0,
        fontWeight: 700,
        '@md': {
          fontSize: '26px',
        },
        '@lg': {
          fontSize: '28px',
        },
      },
      // h3: {
      //   fontSize: '22px',
      //   fontWeight: 500,
      //   lineHeight: '28px',
      //   wordSpacing: 0,
      //   letterSpacing: '1.2%',
      //   '@md': {
      //     fontSize: '20px',
      //   },
      //   '@lg': {
      //     fontSize: '22px',
      //   },
      // },
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
