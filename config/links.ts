import { AppRoutes } from 'config/routes'
import { IconProps } from '@nsfw-app/ui'

interface NavigationLink {
  title: string
  href: string
}

export const links: NavigationLink[] = [
  {
    title: 'Features',
    href: '#',
  },

  {
    title: 'Creators',
    href:
      'https://docs.google.com/forms/d/e/1FAIpQLSdDneYo-3R552Q_mCRwIZ6xpZMtZVQbrjLbODQOruELeSoswA/viewform',
  },
  {
    title: 'FAQs',
    href: AppRoutes.FAQ,
  },
]

export const FOOTER_LINKS = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
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
