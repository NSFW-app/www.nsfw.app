import type { NextPage } from 'next'
import { Layout } from 'components/Layout'
import { HeroSection } from 'components/FansHeroSection'
import { HeroImageSection } from 'components/HeroImageSection'
import { FansFeaturesSection } from 'components/FansFeaturesSection'

const FansLanding: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <HeroImageSection />
      <FansFeaturesSection />
    </Layout>
  )
}

export default FansLanding
