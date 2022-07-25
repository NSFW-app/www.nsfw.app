import type { NextPage } from 'next'
import { Layout } from 'components/Layout'
import { CreatorsHeroSection } from 'components/CreatorsHeroSection'
import { CreatorFeesSection } from 'components/CreatorFeesSection'
import { CreatorFeaturesSection } from 'components/CreatorFeaturesSection'

const CreatorsLanding: NextPage = () => {
  return (
    <Layout>
      <CreatorsHeroSection />
      <CreatorFeaturesSection />
      <CreatorFeesSection />
    </Layout>
  )
}

export default CreatorsLanding
