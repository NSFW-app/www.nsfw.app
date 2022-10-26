import { IconProps } from '@nsfw-app/ui'
import { APP_ROUTES } from 'config/routes'

export const FOOTER_LINKS = [
  // { name: 'DAO', href: APP_ROUTES.DAO },
  { name: 'Privacy Policy', href: APP_ROUTES.PRIVACY_POLICY },
  { name: 'Contact', href: 'mailto:support@nsfw.app' },
]

interface SocialLinkProps {
  icon: IconProps['icon']
  href: string
}

export const SOCIAL_LINKS: SocialLinkProps[] = [
  { icon: 'Discord', href: 'https://discord.gg/XR8Ek4v7EM' },
  { icon: 'Twitter', href: 'https://twitter.com/OfficialNSFWapp' },
  { icon: 'Telegram', href: 'https://t.me/OfficialNSFWApp' },
  {
    icon: 'Notion',
    href:
      'https://nsfwapp.notion.site/NSFW-DAO-bb16149cf78648c1a157b086ab64b628',
  },
]
