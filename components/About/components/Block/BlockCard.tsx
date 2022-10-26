import { Stitches, Flex, Text as UIText } from '@nsfw-app/ui'

export interface BlockCardProps {
  body: string
  gradient?: string
  blopIcon: any
}

// TODO: move into own component
const Text = Stitches.styled(UIText, {
  variants: {
    // When extending a variant, we need to define all of them here for the types to work.
    type: {
      // This is an example, go through the designs and create types for Text and Heading that
      // match so we can easily roll out the design without worrying about font size and line height.
      body2: {
        // fontSize: '...',
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
