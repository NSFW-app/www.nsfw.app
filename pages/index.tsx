import type { NextPage } from 'next'
import { Layout } from 'components/Layout'
import { FansHeroSection } from 'components/FansHeroSection'
import { HeroImageSection } from 'components/HeroImageSection'
import { FansFeaturesSection } from 'components/FansFeaturesSection'

const FansLanding: NextPage = () => {
  return (
    <Layout>
      <FansHeroSection />
      <HeroImageSection />
      <FansFeaturesSection />
    </Layout>
  )
}

export default FansLanding
