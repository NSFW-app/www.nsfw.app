import { Stitches, Flex, Text } from '@nsfw-app/ui'

export interface BlockCardProps {
  body: string
  gradient?: string
  blopIcon: any
}

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
          padding: '16px 85px 36px 85px',
        },
        alignItems: 'center',
        textAlign: 'center',
        ...css,
      }}
    >
      {blopIcon}
      <Text type='body2' css={{ wordSpacing: 0 }}>
        {body}
      </Text>
    </Flex>
  )
}
