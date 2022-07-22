import { useRouter } from 'next/router'
import { Stitches, Flex, Text, Nav } from '@nsfw-app/ui'

import { APP_ROUTES, sizes, spaces } from 'config'
import { LaunchButton } from 'components/LaunchButton'
import { Link } from 'components/Link'

const Container = Stitches.styled(Nav, {
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

const NavLinkText = Stitches.styled(Text, {
  margin: `${spaces[2]} 0`,
})

interface Props {
  visible: boolean
  handleAction: () => void
}

export const MobileMenu: React.FC<Props> = ({ visible, handleAction }) => {
  const router = useRouter()
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
        <Flex column transparent>
          <Link
            nounderline
            href={`${router.pathname}#features`}
            onClick={handleAction}
          >
            <NavLinkText type='body1'>Features</NavLinkText>
          </Link>
          <Link nounderline href={APP_ROUTES.CREATORS} onClick={handleAction}>
            <NavLinkText type='body1'>Creators</NavLinkText>
          </Link>
          <Link nounderline href={APP_ROUTES.FAQ} onClick={handleAction}>
            <NavLinkText type='body1'>FAQs</NavLinkText>
          </Link>
        </Flex>
        <LaunchButton
          css={{ margin: `${spaces[2]} 0` }}
          onLaunch={handleAction}
        />
      </Flex>
    </Container>
  )
}
