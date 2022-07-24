import type { NextPage } from 'next'
import { Layout } from 'components/Layout'
import { CreatorsHeroSection } from 'components/CreatorsHeroSection'
import { CreatorFeesSection } from 'components/CreatorFeesSection'
import { CreatorFeaturesSection } from 'components/CreatorFeaturesSection'

const CreatorsLanding: NextPage = () => {
  return (
    <Layout>
      <CreatorsHeroSection />
      <CreatorFeesSection />
      <CreatorFeaturesSection />
    </Layout>
  )
}

export default CreatorsLanding
