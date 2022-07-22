import type { NextPage } from 'next'
import { Layout } from 'components/Layout'
import { HeroSection } from 'components/HeroSection'
import { HeroImageSection } from 'components/HeroImageSection'
import { CardSection } from 'components/CardSection'

const CreatorsLanding: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <HeroImageSection />
      <CardSection />
    </Layout>
  )
}

export default CreatorsLanding
