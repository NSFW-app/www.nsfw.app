import { AnalyticsBrowser } from '@segment/analytics-next'
import { EventPropsUnion, NSFW_EVENT } from './types'
// import appVersion from 'lib/nextjs/appVersion'

const DEFAULT_WRITE_KEY = 'QAnBlldOLgjESpuvH2J0HZyPyvBvHJIq'
const WRITE_KEY =
  process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY || DEFAULT_WRITE_KEY

export class Analytics {
  api: AnalyticsBrowser

  constructor() {
    this.api = AnalyticsBrowser.load({ writeKey: WRITE_KEY })
  }

  track(event: NSFW_EVENT, props: Partial<EventPropsUnion> = {}): void {
    if (typeof window === 'undefined') {
      return console.error(
        'Warning: Tracking events server-side not supported; use reactions/effects/user-events to run tracking scripts'
      )
    }
    // universal event properties
    const universal = {
      // userType: this.root.user.type,
      // appVersion: appVersion(),
    }

    const properties = {
      ...universal,
      ...props,
      url: window.document.location.href || undefined,
      path: window.document.location.pathname || undefined,
      referrer: window.document.referrer || undefined,
      host: window.document.location.host || undefined,
      hostname: window.document.location.hostname || undefined,
      search: window.document.location.search || undefined,
    }

    // Normalise userType if passed in explicity (not derived from user store)
    // - Used in onboarding from query param
    // properties.userType = properties.userType.toLowerCase()

    this.api.track(event, properties)
  }
}
