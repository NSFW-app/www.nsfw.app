import { useState } from 'react'
import { SerializedFAQ } from 'lib/cms/queries/faqs'
import { ItemContent } from './components/ItemContent'
import { ChevronIcon } from 'components/FAQ/Chevron'
import { Heading } from 'components/Typography'
import { FaqContainer } from 'components/FAQ/Container'

/**
 * a11y guidelines
 * - https://davatron5000.github.io/a11y-nutrition-cards/components/accordion
 */

interface Props {
  data: SerializedFAQ[]
  filterValues: string[]
}

// TODO: should this be in @nsfw-app/ui ?

export const Accordion: React.FC<Props> = ({ data, filterValues }) => {
  const [items, setItems] = useState<SerializedFAQ[]>(data)
  const [selected, setSelected] = useState('')
  const [expanded, setExpanded] = useState('')

  const handleSelect = (value: string) => {
    if (selected === value) {
      setSelected('')
      setItems(data)
      return
    }
    setSelected(value)
    setItems(data.filter((item) => item.category.includes(value)))
  }

  const handleExpanded = (id: string) => {
    if (expanded === id) {
      return setExpanded('')
    }
    setExpanded(id)
  }

  return (
    <>
      {items.map((item, i) => (
        <FaqContainer
          key={item.id}
          aria-controls={item.id}
          aria-expanded={item.id === expanded ? 'true' : 'false'}
          onClick={() => handleExpanded(item.id)}
        >
          <ChevronIcon expanded={expanded} id={item.id} />
          <Heading as='h2'>{item.title}</Heading>
          <ItemContent
            id={item.id}
            hidden={item.id !== expanded}
            content={item.content}
          />
        </FaqContainer>
      ))}
    </>
  )
}
