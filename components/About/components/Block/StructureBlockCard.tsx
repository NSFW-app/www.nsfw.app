import { Stitches, Flex, Text, Heading, Icon, Anchor } from '@nsfw-app/ui'
import { spaces } from 'config'
import Image from 'next/image'

export interface StructureBlockProps {
  heading: string
  subheading: string
  body: string
  bullets: string[]
  gradient?: string
  imagePath: string
  href: string
}

export const StructureBlock: React.FC<Stitches.CSSProp &
  StructureBlockProps> = ({
  body,
  heading,
  subheading,
  bullets,
  gradient,
  imagePath,
  href,
  css,
}) => {
  return (
    <Flex
      css={{
        backgroundImage: gradient ?? '$gray500',
        flexDirection: 'column',
        gap: '25px',
        borderRadius: '8px',
        '@xs': {
          padding: '30px',
        },
        '@lg': {
          padding: '80px 60px',
          minWidth: '465px',
        },

        textAlign: 'left',
        ...css,
      }}
    >
      {/* <Icon icon={icon} css={{ width: '30px', height: '30px' }} /> */}
      <Flex row css={{ gap: '10px', alignItems: 'center' }}>
        <Image alt='img' src={imagePath} width={54} height={54} />
        <Heading as='h4'>{heading}</Heading>
      </Flex>

      <Text type='body3' subText>
        {subheading}
      </Text>
      <Flex column css={{ gap: '10px' }}>
        {bullets.map((bullet, i) => (
          <Flex
            key={`${i}-${bullet}`}
            css={{ alignItems: 'center', gap: '12px' }}
          >
            <Icon icon='Asterisk' />
            <Text type='body4' css={{ color: '$gray900' }}>
              {bullet}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Anchor
        href={href}
        css={{
          color: '$voilet100',
          marginTop: '30px',
        }}
      >
        <Text css={{ color: '$voilet100' }}>More info</Text>
        <Icon
          icon='Arrow'
          css={{
            paddingLeft: spaces[1],
            '.primary': {
              stroke: '$voilet100',
            },
          }}
        />
      </Anchor>
    </Flex>
  )
}
