import type { NextPage } from 'next'
import { Layout } from 'components/Layout'
import { CreatorsHeroSection } from 'components/CreatorsHeroSection'
import { CreatorFeesSection } from 'components/CreatorFeesSection'
import { CreatorFeaturesSection } from 'components/CreatorFeaturesSection'
import { NSFW_EVENT, useAnalytics } from 'lib/analytics'
import { useEffect } from 'react'

const CreatorsLanding: NextPage = () => {
  const analytics = useAnalytics()
  useEffect(() => {
    analytics.track(NSFW_EVENT.VIEW_CREATOR_LANDING)
  }, [analytics])

  return (
    <Layout>
      <CreatorsHeroSection />
      <CreatorFeaturesSection />
      <CreatorFeesSection />
    </Layout>
  )
}

export default CreatorsLanding
