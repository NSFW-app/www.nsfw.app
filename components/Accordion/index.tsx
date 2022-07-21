import { useState } from 'react'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Stitches, Flex, Heading } from '@nsfw/ui'

import { spaces } from 'config'
import { SerializedFAQ } from 'lib/cms/queries/faqs'

import { Filter } from './components/Filter'
import { ItemContent } from './components/ItemContent'
import { Pill } from './components/Pill'

/**
 * a11y guidelines
 * - https://davatron5000.github.io/a11y-nutrition-cards/components/accordion
 */
const List = Stitches.styled('dl', {
  textAlign: 'left',
  width: '100%',
})

const ListItem = Stitches.styled('div', {
  padding: `${spaces[3]} 0`,
})

const Title = Stitches.styled('dt', {})

const Button = Stitches.styled('button', {
  background: 'transparent',
  border: 'none',
  padding: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
})

interface Props {
  data: SerializedFAQ[]
  filterValues: string[]
}

// TODO: should this be in @nsfw/ui ?

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
      <Filter
        values={filterValues}
        selectedValue={selected}
        handleSelect={handleSelect}
      />
      <List>
        {items.map((item, i) => (
          <ListItem
            key={item.id}
            css={{
              borderTop:
                i === 0 ? '' : `1px solid ${Stitches.theme.colors.gray400}`,
            }}
          >
            <Title>
              <Button
                aria-controls={item.id}
                aria-expanded={item.id === expanded ? 'true' : 'false'}
                onClick={() => handleExpanded(item.id)}
              >
                <Heading as='h4'>{item.title}</Heading>
                <Flex row center>
                  {item.category.map((c) => (
                    <Pill key={c}>{c}</Pill>
                  ))}
                </Flex>
              </Button>
            </Title>
            <ItemContent
              id={item.id}
              hidden={item.id !== expanded}
              content={item.content}
            />
          </ListItem>
        ))}
      </List>
    </>
  )
}
