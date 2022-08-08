import { AnalyticsBrowser, EventProperties } from '@segment/analytics-next'
import { EventPropsUnion, NSFW_EVENT } from './types'
// import appVersion from 'lib/nextjs/appVersion'

const WRITE_KEY = process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY ?? ''

export class Analytics {
  api?: AnalyticsBrowser

  constructor() {
    if (!WRITE_KEY) {
      console.debug('No Analytics Segment API key configured')
    }

    this.api = WRITE_KEY
      ? AnalyticsBrowser.load({ writeKey: WRITE_KEY })
      : undefined
  }

  track(event: NSFW_EVENT, props: Partial<EventPropsUnion> = {}): void {
    if (!this.api) return

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
      url: window.document.location.href || null,
      path: window.document.location.pathname || null,
      referrer: window.document.referrer || null,
      host: window.document.location.host || null,
      hostname: window.document.location.hostname || null,
      search: window.document.location.search || null,
    }

    // Normalise userType if passed in explicity (not derived from user store)
    // - Used in onboarding from query param
    // properties.userType = properties.userType.toLowerCase()

    this.api.track(event, properties)
  }
}
