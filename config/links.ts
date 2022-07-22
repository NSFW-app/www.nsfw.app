import { APP_ROUTES } from 'config/routes'
import { IconProps } from '@nsfw-app/ui'

interface NavigationLink {
  title: string
  href: string
  target?: string
}

export const links: NavigationLink[] = [
  {
    title: 'Features',
    href: `${APP_ROUTES.HOME}#features`,
  },
  {
    title: 'Creators',
    href: APP_ROUTES.CREATORS,
  },
  {
    title: 'FAQs',
    href: APP_ROUTES.FAQ,
  },
]

export const FOOTER_LINKS = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Contact Us', href: 'mailto:support@nsfw.app' },
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
