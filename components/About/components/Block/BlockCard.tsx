import {
  Stitches,
  Flex,
  Text as UIText,
  Heading as UIHeading,
} from '@nsfw-app/ui'

export interface BlockCardProps {
  body: string
  gradient?: string
  blopIcon: any
}

// TODO: move into own component
const Heading = Stitches.styled(UIHeading, {
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
const Text = Stitches.styled(UIText, {
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

export const BlockCard: React.FC<Stitches.CSSProp & BlockCardProps> = ({
  body,
  gradient,
  blopIcon,
  css,
}) => {
  return (
    <Flex
      css={{
        backgroundImage: gradient ?? '$gray500',
        flexDirection: 'column',
        borderRadius: '8px',
        justifyContent: 'space-between',
        '@sm': {
          padding: '20px 50px',
        },
        '@md': {
          minWidth: '325px',
        },
        '@xl': {
          minWidth: '27vw',
          padding: '16px 42px 36px',
        },
        alignItems: 'center',
        textAlign: 'center',
        ...css,
      }}
    >
      {blopIcon}
      <Text
        type='body2'
        // css={{ wo  rdSpacing: 0, lineHeight: '20px', letterSpacing: '1.5%' }}
      >
        {body}
      </Text>
    </Flex>
  )
}
