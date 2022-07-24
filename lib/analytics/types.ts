export enum NSFW_EVENT {
  VIEW_LANDING = 'marketing:fans',
  VIEW_CREATOR_LANDING = 'marketing:creators',

  VIEW_PRIVACY_POLICY = 'marketing:privacy-policy:view',
  VIEW_ABOUT = 'marketing:about:view',
  VIEW_FAQ = 'marketing:faq:view',

  GET_STARTED_CLICK = 'marketing:get-started',
  LAUNCH_APP = 'marketing:launch-app',

  FEES_SIGNUP = 'marketing:fees:signup',

  FOOTER_TWITTER_CLICK = 'marketing:social:twitter:click',
  FOOTER_DISCORD_CLICK = 'marketing:social:discord:click',
  FOOTER_TELEGRAM_CLICK = 'marketing:social:telegram:click',
  FOOTER_CONTACT_CLICK = 'marketing:contact:click',
}

type GeneralEventProps = {}

export type EventPropsUnion = GeneralEventProps
