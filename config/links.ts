import { IconProps } from '@nsfw-app/ui'
import { APP_ROUTES } from 'config/routes'

export const FOOTER_LINKS = [
  { name: 'About', href: APP_ROUTES.ABOUT },
  { name: 'Contact', href: 'mailto:support@nsfw.app' },
  { name: 'Privacy Policy', href: APP_ROUTES.PRIVACY_POLICY },
]

interface FooterSocialLink {
  icon: IconProps['icon']
  href: string
}

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  { icon: 'Discord', href: 'https://discord.gg/XR8Ek4v7EM' },
  { icon: 'Twitter', href: 'https://twitter.com/PORNROCKET_' },
  { icon: 'Telegram', href: 'https://t.me/prnrocketbackup' },
]
