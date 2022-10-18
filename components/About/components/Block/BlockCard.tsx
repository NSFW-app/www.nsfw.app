import { Stitches, Flex, Text } from '@nsfw-app/ui'
import Image from 'next/image'

export interface BlockCardProps {
  body: string
  gradient?: string
  imagePath: string
}

export const BlockCard: React.FC<Stitches.CSSProp & BlockCardProps> = ({
  body,
  gradient,
  imagePath,
  css,
}) => {
  return (
    <Flex
      css={{
        backgroundImage: gradient ?? '$gray500',
        flexDirection: 'column',
        borderRadius: '8px',
        '@md': {
          minWidth: '315px',
        },
        '@xl': {
          minWidth: '400px',
        },
        padding: '16px 58px 36px 58px',
        alignItems: 'center',
        textAlign: 'center',
        ...css,
      }}
    >
      {/* <Icon icon={icon} css={{ width: '30px', height: '30px' }} /> */}
      <Image alt='img' src={imagePath} width={150} height={120} />

      <Text type='body2' css={{ wordSpacing: 0 }}>
        {body}
      </Text>
    </Flex>
  )
}
