import { Stitches, Flex, Text, Heading, Icon, Anchor, Box } from '@nsfw-app/ui'
import { spaces } from 'config'

export interface StructureBlockProps {
  heading: string
  subheading: string
  body?: string
  bullets: string[]
  gradient?: string
  href: string
  emoji: string
}

export const StructureBlock: React.FC<Stitches.CSSProp &
  StructureBlockProps> = ({
  body,
  heading,
  subheading,
  bullets,
  gradient,
  href,
  emoji,
  css,
}) => {
  return (
    <Flex
      css={{
        backgroundImage: gradient ?? '$gray500',
        flexDirection: 'column',
        gap: '25px',
        '@xs': {
          padding: '40px 60px',
        },
        '@lg': {
          padding: '4vw',
          minWidth: '465px',
        },
        '@xl': {
          minWidth: '35vw',
        },
        textAlign: 'left',
        borderRadius: '8px',
        ...css,
      }}
    >
      {/* <Icon icon={icon} css={{ width: '30px', height: '30px' }} /> */}
      <Flex row css={{ gap: '10px', alignItems: 'center' }}>
        <Flex
          center
          css={{
            padding: '10px',
            backgroundColor: '$gray100',
            borderRadius: '100%',
            border: '1px solid $gray600',
          }}
        >
          <Text css={{ fontSize: '25px', width: '25px', height: '25px' }}>
            {emoji}
          </Text>
        </Flex>
        <Heading as='h4'>{heading}</Heading>
      </Flex>

      <Flex column css={{ gap: '25px' }}>
        <Text type='body2' subText>
          {subheading}
        </Text>
        <Flex column css={{ gap: '10px' }}>
          {bullets.map((bullet, i) => (
            <Flex
              key={`${i}-${bullet}`}
              css={{ alignItems: 'center', gap: '12px' }}
            >
              {/* TODO (after merging the tokenomics page): Change to CheckIcon (I created the icon component on a new branch: feat/tokenomics) */}
              <Icon icon='Asterisk' />
              <Text type='body3' css={{ color: '$gray900' }}>
                {bullet}
              </Text>
            </Flex>
          ))}
        </Flex>

        {body && (
          <Text type='body2' subText>
            {body}
          </Text>
        )}
      </Flex>

      <Anchor
        href={href}
        css={{
          color: '$violet300',
          marginTop: '15px',
          svg: {
            transform: 'translateX(0)',
            transition: '0.2s',
          },
          ':hover': {
            svg: {
              transform: 'translateX(4px)',
              transition: '0.3s',
            },
          },
        }}
      >
        <Flex row>
          <Text type='body2' css={{ color: '$violet300' }}>
            More info
          </Text>
          <Icon
            icon='Arrow'
            css={{
              paddingLeft: spaces[1],
              '.primary': {
                stroke: '$violet300',
              },
            }}
          />
        </Flex>
      </Anchor>
    </Flex>
  )
}
