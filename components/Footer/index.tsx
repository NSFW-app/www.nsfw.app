import {
  Stitches,
  Footer as FooterPrimitive,
  Nav,
  Text,
  List,
  ListItem,
  Flex,
  Icon,
  Anchor,
  useIsDesktopSize,
} from '@nsfw-app/ui'

import { FOOTER_LINKS, SOCIAL_LINKS, sizes } from 'config'
import { Link } from 'components/Link'

const SocialsList = Stitches.styled(List, {
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '16px',
  gap: '15px',
  width: 'auto',
  padding: '10px',
  '@lg': {
    width: '220px',
  },
})

const CopyRightText = Stitches.styled(Text, {
  display: 'none',
  '@lg': {
    display: 'block',
  },
})

const FooterInnerContainer = Stitches.styled(Flex, {
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  transition: 'all 200ms ease',

  '@md': {
    padding: '0 40px',
  },
  '@xxl': {
    padding: sizes.sectionPadding,
  },
})

const MarketingFooter = Stitches.styled(FooterPrimitive, {
  backgroundColor: 'gray500',
  borderTop: `1px solid $gray400`,
  width: '100%',
})

export interface FooterProps
  extends Stitches.ComponentProps<typeof FooterPrimitive> {}

// TODO: refactor this to be composable instead of configurable, and move into @nfsw-app/ui
export const Footer: React.FC<FooterProps> = ({ css }) => {
  const isDesktop = useIsDesktopSize()
  return (
    <MarketingFooter
      css={{
        ...css,
      }}
    >
      <FooterInnerContainer
        css={{ justifyContent: isDesktop ? 'space-between' : 'center' }}
      >
        <CopyRightText type='body4'>
          &copy; {new Date().getFullYear()} NSFW.app
        </CopyRightText>
        {isDesktop && (
          <SocialsList horizontal>
            {SOCIAL_LINKS.map(({ icon, href }) => (
              <Anchor
                key={href}
                rel='noopener noreferrer'
                target='_blank'
                href={href}
              >
                <Icon icon={icon} css={{ height: '22px', width: '22px' }} />
              </Anchor>
            ))}
          </SocialsList>
        )}
        <Nav>
          <List horizontal css={{ gap: '15px' }}>
            {FOOTER_LINKS.map(({ name, href }) => (
              <ListItem key={href}>
                <Link href={href} theme='text'>
                  <Text type='body4'>{name}</Text>
                </Link>
              </ListItem>
            ))}
          </List>
        </Nav>
      </FooterInnerContainer>
    </MarketingFooter>
  )
}
