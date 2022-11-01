import { Stitches, Flex, Icon } from '@nsfw-app/ui'
import { Text } from 'components/Typography'
import { Heading } from 'components/Typography'
import { ArrowLink } from 'components/ArrowLink'
import { CheckIcon } from 'components/Icons/Check'

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
          padding: '40px 20px',
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
        <Heading as='h2'>{heading}</Heading>
      </Flex>

      <Flex column css={{ gap: '25px' }}>
        <Text type='body2' subText>
          {subheading}
        </Text>
        <Flex column css={{ gap: '15px' }}>
          {bullets.map((bullet, i) => (
            <Flex
              key={`${i}-${bullet}`}
              css={{ alignItems: 'center', gap: '12px' }}
            >
              <Flex>
                <CheckIcon css={{ width: 15, height: 15 }} />
              </Flex>
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

      <ArrowLink href={href}>More info</ArrowLink>
    </Flex>
  )
}
