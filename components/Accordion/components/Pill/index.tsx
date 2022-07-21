import { ComponentProps } from '@stitches/react'
import { Stitches, Text } from '@nsfw-app/ui'

interface Props extends ComponentProps<typeof Text> {
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}

export const Pill: React.FC<Props> = ({
  active = false,
  children,
  onClick,
  css,
}) => {
  return (
    <Text
      type='body4'
      onClick={onClick}
      subText
      css={{
        padding: '8px',
        background: active ? Stitches.theme.colors.gray500 : 'transparent',
        border: `1px solid ${Stitches.theme.colors.gray600}`,
        boxSizing: 'border-box',
        borderRadius: '8px',
        marginLeft: '8px',
        cursor: 'pointer',
        ...css,
      }}
    >
      {children}
    </Text>
  )
}
