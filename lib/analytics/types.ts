export enum NSFW_EVENT {
  VIEW_LANDING = 'marketing:fans',
  VIEW_CREATOR_LANDING = 'marketing:creators',

  GET_STARTED_CLICK = 'marketing:get-started',
  LAUNCH_APP = 'marketing:launch-app',

  FEES_SIGNUP = 'marketing:fees:signup',
}

type GeneralEventProps = {}

export type EventPropsUnion = GeneralEventProps
