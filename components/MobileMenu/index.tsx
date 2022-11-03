import { useRouter } from 'next/router'
import {
  NavLink,
  BurgerMenu,
  BurgerLeftMenu,
  BurgerRightMenuItems,
  Icon,
  Flex,
} from '@nsfw-app/ui'
import { APP_ROUTES, SOCIAL_LINKS } from 'config'
import NextJsLink from 'next/link'
import { useAnalytics, NSFW_EVENT } from 'lib/analytics'
import { useEffect, useRef } from 'react'

const MOBILE_NAV_GESTURE_EDGE = 25
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
  useEffect(() => {
    if (!appContainerRef.current) {
      appContainerRef.current = window.document.querySelector('#__next') as
        | HTMLElement
        | undefined
    }
  }, [appContainerRef])

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
        <NextJsLink passHref href={APP_ROUTES.DAO}>
          <NavLink
            highlightPosition='vertical'
            active={router.pathname === APP_ROUTES.DAO}
          >
            DAO
          </NavLink>
        </NextJsLink>
        <NextJsLink passHref href={APP_ROUTES.TOKENOMICS}>
          <NavLink
            highlightPosition='vertical'
            active={router.pathname === APP_ROUTES.TOKENOMICS}
          >
            NSFW+
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
        <NextJsLink
          passHref
          href={APP_ROUTES.APP}
          onClick={() => handleTrackingActionClick(NSFW_EVENT.LAUNCH_APP)}
        >
          <NavLink
            highlightPosition='vertical'
            css={{
              '.primary': {
                transition: '0.1s',
                stroke: '$gray800',
              },
              ':hover': {
                '.primary': {
                  stroke: '$gray900',
                },
              },
            }}
          >
            <Flex row css={{ gap: '5px' }}>
              Launch App
              <Icon icon='ExternalLink' />
            </Flex>
          </NavLink>
        </NextJsLink>
      </BurgerRightMenuItems>
    </BurgerMenu>
  )
}
