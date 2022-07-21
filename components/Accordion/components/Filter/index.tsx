import { sizes, spaces } from 'config'
import { Flex, Heading, Text } from '@nsfw-app/ui'
import { Pill } from '../Pill'

interface Props {
  values: string[]
  selectedValue: string
  handleSelect: (value: string) => void
}

export const Filter: React.FC<Props> = ({
  values,
  selectedValue,
  handleSelect,
}) => {
  return (
    <Flex
      alignCenter
      fullWidth
      css={{
        position: 'sticky',
        top: sizes.navigationHeight,
        paddingTop: spaces[3],
        paddingBottom: spaces[3],
      }}
    >
      <Text type='body1' subText>
        Filter:
      </Text>
      {values.map((value) => (
        <Pill
          key={value}
          active={value === selectedValue}
          onClick={() => handleSelect(value)}
        >
          {value}
        </Pill>
      ))}
    </Flex>
  )
}
