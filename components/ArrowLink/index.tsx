import { Anchor, Flex, Icon, Stitches } from '@nsfw-app/ui'
import { Text } from 'components/Typography'

export const ArrowLink: React.FC<Stitches.ComponentProps<typeof Anchor>> = ({
  css,
  children,
  ...props
}) => (
  <Anchor
    css={{
      color: '$violet300',
      marginTop: '10px',
      svg: {
        transform: 'translateX(0)',
        transition: '0.2s',
      },
      ':hover': {
        svg: {
          transform: 'translateX(4px)',
          transition: '0.3s',
        },
      },
      ...css,
    }}
    {...props}
  >
    <Flex row>
      <Text type='body3' css={{ color: '$violet300', fontWeight: 400 }}>
        {children}
      </Text>
      <Icon
        icon='Arrow'
        css={{
          paddingLeft: '$1',
          '.primary': {
            stroke: '$violet300',
          },
        }}
      />
    </Flex>
  </Anchor>
)
