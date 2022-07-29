import { useRouter } from 'next/router'
import {
  NavLink,
  BurgerMenu,
  BurgerLeftMenu,
  BurgerRightMenuItems,
} from '@nsfw-app/ui'
import { APP_ROUTES, SOCIAL_LINKS } from 'config'
import NextJsLink from 'next/link'
import { useAnalytics, NSFW_EVENT } from 'lib/analytics'
import { useRef } from 'react'

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
  const appContainerRef = useRef<HTMLElement | undefined>()

  return (
    <BurgerMenu
      opened={visible}
      onClose={onClose}
      onOpen={onOpen}
      appContainerRef={appContainerRef}
      css={{ a: { justifyContent: 'end !important' } }}
    >
      <BurgerLeftMenu socialLinks={SOCIAL_LINKS} />
      <BurgerRightMenuItems>
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
        <NextJsLink passHref href={APP_ROUTES.APP}>
          <NavLink highlightPosition='vertical'>Launch App</NavLink>
        </NextJsLink>
      </BurgerRightMenuItems>
    </BurgerMenu>
  )
}
