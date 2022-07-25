import { useRouter } from 'next/router'
import { Stitches, Flex, Nav, NavLink } from '@nsfw-app/ui'

import { APP_ROUTES, sizes, spaces } from 'config'
import { LaunchButton } from 'components/LaunchButton'
import NextJsLink from 'next/link'

const MobileMenuNav = Stitches.styled(Nav, {
  background: '$gray300',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: '$layerOne',
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
  const router = useRouter()
  return (
    <MobileMenuNav css={{ display: visible ? 'block' : 'none' }}>
      <Flex
        column
        css={{
          justifyContent: 'space-between',
          height: '100%',
          paddingTop: sizes.navigationHeight,
        }}
      >
        <Flex column css={{ height: '150px' }}>
          <NextJsLink passHref href={APP_ROUTES.HOME}>
            <NavLink
              highlightPosition='vertical'
              active={router.pathname === APP_ROUTES.HOME}
            >
              Fans
            </NavLink>
          </NextJsLink>
          <NextJsLink passHref href={APP_ROUTES.CREATORS}>
            <NavLink
              highlightPosition='vertical'
              active={router.pathname === APP_ROUTES.CREATORS}
            >
              Creators
            </NavLink>
          </NextJsLink>
          <NextJsLink passHref href={APP_ROUTES.FAQ}>
            <NavLink
              highlightPosition='vertical'
              active={router.pathname === APP_ROUTES.FAQ}
            >
              FAQs
            </NavLink>
          </NextJsLink>
        </Flex>
        <LaunchButton
          css={{ margin: `${spaces[2]} 0` }}
          onLaunch={handleAction}
        />
      </Flex>
    </MobileMenuNav>
  )
}
