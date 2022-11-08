export const SITE_DOMAIN =
  process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'https://www.nsfw.app'

export const APP_SITE_DOMAIN =
  process.env.NEXT_PUBLIC_APP_SITE_DOMAIN ?? 'https://nsfw.app'

export const APP_ROUTES = {
  HOME: '/',
  DAO: '/dao',
  TOKENOMICS: '/tokenomics',
  CREATORS: '/creators',
  FAQ: '/faq',
  PRIVACY_POLICY: '/privacy-policy',
  APP: APP_SITE_DOMAIN,
  ADMIRER_SIGNUP: `${APP_SITE_DOMAIN}/signup?utm_source=cta&utm_medium=website&utm_campaign=fan-cta`,
  CREATOR_SIGNUP: `${APP_SITE_DOMAIN}/signup?accountType=creator&utm_source=cta&utm_medium=website&utm_campaign=creator-cta`,
}

export const EXTERNAL_LINKS = {
  DISCORD: 'https://discord.gg/XR8Ek4v7EM',
  SNAPSHOT: 'https://snapshot.org/#/nsfwgov.eth',
  DISCORD_PROPOSALS_CHANNEL: 'https://discord.gg/tqZHy7hprD',
  DISCORD_VOLUNTEER_CHANNEL: 'https://discord.gg/VTyB2TQc7U',
  DEWORK: 'https://app.dework.xyz/nsfw',
  NOTION_DAO_INDEX:
    'https://nsfwapp.notion.site/Index-bb16149cf78648c1a157b086ab64b628',
}
