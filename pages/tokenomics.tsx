import { Layout } from 'components/Layout'
import { TopPart } from 'components/Tokenomics/TopPart'
import { Blurred2 } from 'components/Tokenomics/Blurred'
import { TokenUtility } from 'components/Tokenomics/TokenUtility'
import { SwiperComponent } from 'components/Tokenomics/Swiper'
import { Ecosystem } from 'components/Tokenomics/Ecosystem'

const Tokenomics = () => {
  return (
    <Layout>
      <TopPart />
      <Blurred2 />
      <TokenUtility />
      <Ecosystem />
      <SwiperComponent />
    </Layout>
  )
}

export default Tokenomics
