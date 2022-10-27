import { Layout } from 'components/Layout'
import { TopPart } from 'components/Tokenomics/TopPart'
import { Blurred2 } from 'components/Tokenomics/Blurred'
import { TokenUtility } from 'components/Tokenomics/TokenUtility'
import { SwiperComponent } from 'components/Tokenomics/Swiper'
import { Ecosystem } from 'components/Tokenomics/Ecosystem'
import { useEffect } from 'react'

interface TokenomicsProps {
  deviceType: string
}

const Tokenomics: React.FC<TokenomicsProps> = ({ deviceType }) => {
  useEffect(() => {
    localStorage.setItem('deviceType', deviceType)
  }, [deviceType])
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

export async function getServerSideProps(context: {
  req: { headers: { [x: string]: any } }
}) {
  const UA = context.req.headers['user-agent']
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  )
  return {
    props: {
      deviceType: isMobile ? 'mobile' : 'desktop',
    },
  }
}

export default Tokenomics
