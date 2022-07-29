import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Layout } from 'components/Layout'
import { FansHeroSection } from 'components/FansHeroSection'
import { HeroImageSection } from 'components/HeroImageSection'
import { FansFeaturesSection } from 'components/FansFeaturesSection'
import { useAnalytics, NSFW_EVENT } from 'lib/analytics'

const FansLanding: NextPage = () => {
  const analytics = useAnalytics()
  useEffect(() => {
    analytics.track(NSFW_EVENT.VIEW_LANDING)
  }, [analytics])
  
  return (
    <Layout>
      <FansHeroSection />
      <HeroImageSection />
      <FansFeaturesSection />
    </Layout>
  )
}

export default FansLanding
