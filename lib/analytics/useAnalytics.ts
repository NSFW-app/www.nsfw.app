import { useContext } from 'react'
import { AnalyticsContext } from './AnalyticsProvider'

export function useAnalytics() {
  const analytics = useContext(AnalyticsContext)
  if (analytics === null) {
    throw new Error(
      'Could not access Analytics service instance, please add the context provider'
    )
  }
  return analytics
}
