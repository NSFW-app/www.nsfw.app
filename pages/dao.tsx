import { BottomSection } from 'components/About/sections/Bottom'
import { MiddleSection } from 'components/About/sections/Middle'
import { TopSection } from 'components/About/sections/Top'
import { Layout } from 'components/Layout'
import { marketingTheme } from 'lib/theme/marketing'
import { NextPage } from 'next'

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </Layout>
  )
}

export default AboutPage
