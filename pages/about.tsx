import { Layout } from 'components/Layout'
import { TopPart } from 'components/About/TopPart'
import { Blurred } from 'components/About/Blurred'
import { Structure } from 'components/About/Structure'

const AboutPage = () => {
  return (
    <Layout>
      <TopPart />
      <Blurred />
      <Structure />
    </Layout>
  )
}

export default AboutPage
