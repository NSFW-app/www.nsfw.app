import { Icon } from '@nsfw-app/ui'

export const ChevronIcon: React.FC<{ expanded: string; id: string }> = ({
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
