import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Squash as Hamburger } from 'hamburger-react'

import { Stitches, Text, Icons } from '@nsfw-app/ui'

import { spaces, sizes, links, APP_ROUTES } from 'config'

import { MobileMenu } from 'components/MobileMenu'
import { LaunchButton } from 'components/LaunchButton'
import { Link } from 'components/Link'

const Container = Stitches.styled('nav', {
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

const LeftSection = Stitches.styled('div', {
  justifySelf: 'start',
})

const MiddleSection = Stitches.styled('div', {
  display: 'none',
  background: 'transparent',
  '@lg': {
    display: 'flex',
  },
})

const RightSection = Stitches.styled('div', {
  justifySelf: 'end',
  display: 'flex',
  alignItems: 'center',
})

const ToggleContainer = Stitches.styled('div', {
  cursor: 'pointer',
  display: 'block',
  background: 'transparent',
  '@lg': {
    display: 'none',
  },
})

export const Navigation = () => {
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
        <MiddleSection css={{ justifyContent: 'center', alignItems: 'center' }}>
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              style={{ textDecoration: 'none' }}
              target={link.target ?? ''}
            >
              <Text
                type='body2'
                css={{ margin: `0 ${sizes.navigationItemMargin}` }}
              >
                {link.title}
              </Text>
            </Link>
          ))}
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
