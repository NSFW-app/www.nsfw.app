import { Stitches, Flex, Text } from '@nsfw/ui'

import { links, sizes, spaces } from 'config'
import { LaunchButton } from 'components/LaunchButton'

const Container = Stitches.styled('div', {
  background: Stitches.theme.colors.gray300,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: Stitches.theme.zIndices.layerOne,
  padding: `0 ${spaces[2]}`,
  '@md': {
    padding: '0 40px',
  },
})

interface Props {
  visible: boolean
  handleAction: () => void
}

export const MobileMenu: React.FC<Props> = ({ visible, handleAction }) => {
  return (
    <Container css={{ display: visible ? 'block' : 'none' }}>
      <Flex
        column
        css={{
          justifyContent: 'space-between',
          background: 'transparent',
          height: '100%',
          paddingTop: sizes.navigationHeight,
        }}
      >
        <div>
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              style={{ textDecoration: 'none' }}
              onClick={handleAction}
            >
              <Text
                type='body1'
                css={{ margin: `${sizes.navigationItemMargin} 0` }}
              >
                {link.title}
              </Text>
            </a>
          ))}
        </div>
        <LaunchButton
          css={{ margin: `${spaces[2]} 0` }}
          onLaunch={handleAction}
        />
      </Flex>
    </Container>
  )
}
