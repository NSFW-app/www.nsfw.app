import { Anchor, Flex, Icon, Stitches, Text } from '@nsfw-app/ui'

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
      <Text type='body2' css={{ color: '$violet300' }}>
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
