import { Icon } from '@nsfw-app/ui'
import { ChevronIcon } from 'components/FAQ/Chevron'
import { Heading } from 'components/Typography'
import { useState } from 'react'
import { AnimatedContent } from '../../FAQ/AnimatedContent'
import { FaqContainer } from '../../FAQ/Container'

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
      <Heading as='h2'>{heading}</Heading>
      <ChevronIcon expanded={expanded} id={id} />
      <AnimatedContent id={id} hidden={id !== expanded} content={body} />
    </FaqContainer>
  )
}
