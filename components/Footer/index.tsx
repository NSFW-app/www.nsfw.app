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
} from '@nsfw/ui'

import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from 'config'
import { Link } from 'components/Link'

export interface FooterProps
  extends Stitches.ComponentProps<typeof FooterPrimitive> {}

export const Footer: React.FC<FooterProps> = ({ css }) => {
  return (
    <FooterPrimitive
      css={{
        backgroundColor: Stitches.theme.colors.gray500,
        borderTop: `1px solid ${Stitches.theme.colors.gray400}`,
        width: '100%',
        ...css,
      }}
    >
      <Flex
        css={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          transition: 'all 200ms ease',
          justifyContent: 'space-between',
          '@md': {
            padding: '0 40px',
          },
          '@xxl': {
            padding: '0 calc(50vw - 664px)',
          },
        }}
      >
        {' '}
        <Text
          css={{
            fontSize: '11px',
            lineHeight: '16px',
            color: Stitches.theme.colors.gray800,

            display: 'none',
            '@lg': {
              display: 'block',
            },
          }}
        >
          &copy; {new Date().getFullYear()} NSFW.app
        </Text>
        <List
          horizontal
          css={{
            gap: '15px',
            width: 'auto',
            padding: '10px',
            '@lg': {
              width: '220px',
            },
          }}
        >
          {FOOTER_SOCIAL_LINKS.map(({ icon, href }) => (
            <Anchor
              key={href}
              rel='noopener noreferrer'
              target='_blank'
              href={href}
            >
              <Icon icon={icon} css={{ height: '22px', width: '22px' }} />
            </Anchor>
          ))}
        </List>
        <Nav>
          <List horizontal css={{ gap: '15px' }}>
            {FOOTER_LINKS.map(({ name, href }) => (
              <ListItem key={href}>
                <Link
                  href={href}
                  theme='text'
                  css={{
                    fontSize: '11px',
                    lineHeight: '16px',
                  }}
                >
                  {name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Nav>
      </Flex>
    </FooterPrimitive>
  )
}
