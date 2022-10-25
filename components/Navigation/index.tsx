import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Squash as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router'
import NextJsLink from 'next/link'

import { Stitches, Icons, Nav, Box, Flex, NavLink } from '@nsfw-app/ui'

import { spaces, sizes, APP_ROUTES } from 'config'

import { MobileMenu } from 'components/MobileMenu'
import { LaunchButton } from 'components/LaunchButton'
import { Link } from 'components/Link'
import { NSFW_EVENT, useAnalytics } from 'lib/analytics'

const TopbarNav = Stitches.styled(Nav, {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  padding: `0 ${spaces[2]}`,
  backdropFilter: 'blur(8px)',
  transition: 'all 200ms ease',
  '@md': {
    padding: `0 ${spaces[4]}`,
  },
  '@lg': {
    gridTemplateColumns: '1fr auto 1fr',
  },
  '@xxl': {
    padding: sizes.sectionPadding,
  },
  zIndex: '$layerThree',
})

const LeftSection = Stitches.styled(Box, {
  justifySelf: 'start',
})

const MiddleSection = Stitches.styled(Flex, {
  display: 'none',
  height: '100%',
  width: '460px',
  '@lg': {
    display: 'flex',
  },
})

const RightSection = Stitches.styled(Flex, {
  justifySelf: 'end',
  alignItems: 'center',
})

const ToggleContainer = Stitches.styled(Box, {
  cursor: 'pointer',
  display: 'block',
  '@lg': {
    display: 'none',
  },
})

export const Navigation = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const analytics = useAnalytics()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const currentScroll = currPos.y * -1
      setIsScrolled(currentScroll > 0)
    },
    [],
    undefined,
    false,
    100
  )

  const containerStyles = isScrolled
    ? {
        height: sizes.navigationHeight,
        background: 'rgba(27, 28, 32, 0.1)',
        borderBottom: `1px solid ${Stitches.theme.colors.gray400}`,
        '@lg': {
          height: sizes.navigationHeight,
        },
      }
    : {
        height: sizes.navigationHeight,
        background: 'none',
        borderBottom: 'none',
        '@lg': {
          height: sizes.navigationHeightExpanded,
        },
      }

  return (
    <>
      <TopbarNav css={containerStyles}>
        <LeftSection>
          <Link href={APP_ROUTES.HOME}>
            <Icons.LogoGradient />
          </Link>
        </LeftSection>
        <MiddleSection>
          <NextJsLink passHref href={APP_ROUTES.HOME}>
            <NavLink active={router.pathname === APP_ROUTES.HOME}>Fans</NavLink>
          </NextJsLink>
          <NextJsLink passHref href={APP_ROUTES.CREATORS}>
            <NavLink active={router.pathname === APP_ROUTES.CREATORS}>
              Creators
            </NavLink>
          </NextJsLink>
          <NextJsLink passHref href={APP_ROUTES.DAO}>
            <NavLink active={router.pathname === APP_ROUTES.DAO}>DAO</NavLink>
          </NextJsLink>
          <NextJsLink passHref href={APP_ROUTES.FAQ}>
            <NavLink active={router.pathname === APP_ROUTES.FAQ}>FAQs</NavLink>
          </NextJsLink>
        </MiddleSection>
        <RightSection>
          <LaunchButton
            css={{
              marginLeft: sizes.navigationItemMargin,
              display: 'none',
              '@lg': { display: 'inline-flex' },
            }}
            onClick={() => analytics.track(NSFW_EVENT.LAUNCH_APP)}
          />
          <ToggleContainer onClick={toggleMenu}>
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={20}
              duration={0.2}
              color='#FFF'
              rounded
            />
          </ToggleContainer>
        </RightSection>
      </TopbarNav>
      <MobileMenu
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      />
    </>
  )
}
