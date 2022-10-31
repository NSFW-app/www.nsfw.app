import { Stitches, Flex } from '@nsfw-app/ui'
import { Text } from 'components/Typography'

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
        '@xs': {
          padding: '30px 20px',
        },
        '@xl': {
          padding: '16px 42px 36px',
        },
        alignItems: 'center',
        textAlign: 'center',
        ...css,
      }}
    >
      {blopIcon}
      <Text type='body2'>{body}</Text>
    </Flex>
  )
}
