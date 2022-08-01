export const SITE_DOMAIN =
  process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'https://www.nsfw.app'

export const APP_SITE_DOMAIN =
  process.env.NEXT_PUBLIC_APP_SITE_DOMAIN ?? 'https://nsfw.app'

export const APP_ROUTES = {
  HOME: '/',
  CREATORS: '/creators',
  FAQ: '/faq',
  ABOUT: '/about-us',
  PRIVACY_POLICY: '/privacy-policy',
  APP: APP_SITE_DOMAIN,
  ADMIRER_SIGNUP: `${APP_SITE_DOMAIN}/signup?utm_source=cta&utm_medium=website&utm_campaign=fan-cta`,
  CREATOR_SIGNUP: `${APP_SITE_DOMAIN}/signup?accountType=creator&utm_source=cta&utm_medium=website&utm_campaign=creator-cta`,
}
