import { Icon } from '@nsfw-app/ui'
import { Heading } from 'components/Typography'
import { useState } from 'react'
import { AnimatedContent } from './AnimatedContent'
import { FaqContainer } from './Container'

const ChevronIcon: React.FC<{ expanded: string; id: string }> = ({
  expanded,
  id,
}) => {
  return (
    <Icon
      icon='Chevron'
      css={{
        position: 'absolute',
        transition: '0.2s',
        top: '40%',
        transform: expanded == id ? 'rotate(270deg)' : 'rotate(90deg)',
        height: 15,
        width: 15,
        '@xs': { right: 20 },
        '@md': { right: 50 },
        '@lg': {
          height: 18,
          width: 18,
        },
        '.primary': {
          stroke: '$violet300',
        },
      }}
    />
  )
}

interface FAQprops {
  heading: string
  body: React.ReactNode
  id: string
}

export const FAQitem: React.FC<FAQprops> = ({ heading, body, id }) => {
  const [expanded, setExpanded] = useState('')

  const handleExpanded = (id: string) => {
    if (expanded === id) {
      return setExpanded('')
    }
    setExpanded(id)
  }
  return (
    <FaqContainer onClick={() => handleExpanded(id)}>
      <Heading css={{ '@lg': { fontSize: '24px' } }} as='h2'>
        {heading}
      </Heading>
      <ChevronIcon expanded={expanded} id={id} />
      <AnimatedContent id={id} hidden={id !== expanded} content={body} />
    </FaqContainer>
  )
}
