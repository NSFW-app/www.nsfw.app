import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Squash as Hamburger } from 'hamburger-react'

import { Stitches, Text, Icons, Nav, Box, Flex } from '@nsfw-app/ui'

import { spaces, sizes, APP_ROUTES } from 'config'

import { MobileMenu } from 'components/MobileMenu'
import { LaunchButton } from 'components/LaunchButton'
import { Link } from 'components/Link'
import { useRouter } from 'next/router'

const Container = Stitches.styled(Nav, {
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
    padding: '0 calc(50vw - 664px)',
  },
  zIndex: Stitches.theme.zIndices.layerThree,
})

const LeftSection = Stitches.styled(Box, {
  backgroundColor: 'transparent',
  justifySelf: 'start',
})

const MiddleSection = Stitches.styled(Flex, {
  display: 'none',
  backgroundColor: 'transparent',
  '@lg': {
    display: 'flex',
  },
})

const RightSection = Stitches.styled(Flex, {
  justifySelf: 'end',
  alignItems: 'center',
  backgroundColor: 'transparent',
})

const ToggleContainer = Stitches.styled(Box, {
  cursor: 'pointer',
  display: 'block',
  backgroundColor: 'transparent',
  '@lg': {
    display: 'none',
  },
})

const NavLinkText = Stitches.styled(Text, {
  margin: `0 ${sizes.navigationItemMargin}`,
})

export const Navigation = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
      <Container css={containerStyles}>
        <LeftSection>
          <Link href={APP_ROUTES.HOME}>
            <Icons.LogoGradient css={{ width: 150, height: 90 }} />
          </Link>
        </LeftSection>
        <MiddleSection center transparent>
          <Link nounderline href={`${router.pathname}#features`}>
            <NavLinkText type='body2'>Features</NavLinkText>
          </Link>
          <Link nounderline href={APP_ROUTES.CREATORS}>
            <NavLinkText type='body2'>Creators</NavLinkText>
          </Link>
          <Link nounderline href={APP_ROUTES.FAQ}>
            <NavLinkText type='body2'>FAQs</NavLinkText>
          </Link>
        </MiddleSection>
        <RightSection>
          <LaunchButton
            css={{
              marginLeft: sizes.navigationItemMargin,
              display: 'none',
              '@lg': { display: 'inline-flex' },
            }}
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
      </Container>
      <MobileMenu visible={isOpen} handleAction={() => setIsOpen(false)} />
    </>
  )
}
