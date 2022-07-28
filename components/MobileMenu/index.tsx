import { useRouter } from 'next/router'
import { NavLink, BurgerMenu } from '@nsfw-app/ui'
import { APP_ROUTES } from 'config'
import NextJsLink from 'next/link'
import { useAnalytics, NSFW_EVENT } from 'lib/analytics'

interface Props {
  visible: boolean
  onClose: () => void
  onOpen: () => void
}

export const MobileMenu: React.FC<Props> = ({ visible, onClose, onOpen }) => {
  const router = useRouter()
  const analytics = useAnalytics()
  const handleTrackingActionClick = (event: NSFW_EVENT) => {
    analytics.track(event)
    onClose()
  }
  return (
    <BurgerMenu
      opened={visible}
      onClose={onClose}
      onOpen={onOpen}
      css={{ a: { justifyContent: 'end !important' } }}
    >
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

      {/* <LaunchButton
            css={{ margin: `${spaces[2]} 0` }}
            onLaunch={handleTrackingActionClick}
          /> */}
    </BurgerMenu>
  )
}
