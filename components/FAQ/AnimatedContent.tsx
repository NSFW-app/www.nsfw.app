import { animated, useTransition } from '@react-spring/web'

interface ContentProps {
  id: string
  hidden: boolean
  content: React.ReactNode
}
export const AnimatedContent: React.FC<ContentProps> = ({
  id,
  hidden,
  content,
}) => {
  const transitions = useTransition(!hidden, {
    from: { opacity: 0, y: -15 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -15 },
    config: { duration: 300 },
  })

  return transitions(
    (styles, item) =>
      item && (
        <animated.dd style={styles} id={id} hidden={hidden}>
          {content}
        </animated.dd>
      )
  )
}
