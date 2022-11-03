import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { animated, useTransition } from '@react-spring/web'
import { Anchor } from '@nsfw-app/ui'
import { Text } from 'components/Typography'

interface Props {
  id: string
  hidden: boolean
  content: MDXRemoteSerializeResult
}

const components = {
  p: (props: any) => (
    <Text
      type='body1'
      css={{
        cursor: 'default',
        color: '$gray800',
      }}
    >
      {props.children}
    </Text>
  ),
  a: (props: any) => (
    <Anchor
      nounderline
      css={{ cursor: 'pointer', color: '$violet300' }}
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {props.children}
    </Anchor>
  ),
}

export const ItemContent: React.FC<Props> = ({ id, hidden, content }) => {
  const transitions = useTransition(!hidden, {
    from: { opacity: 0, y: -16 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -16 },
    config: { duration: 200 },
  })

  return transitions(
    (styles, item) =>
      item && (
        <animated.dd style={styles} id={id} hidden={hidden}>
          <MDXRemote {...content} components={components} />
        </animated.dd>
      )
  )
}
