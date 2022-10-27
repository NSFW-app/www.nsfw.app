import { Layout } from 'components/Layout'
import { TopPart } from 'components/Tokenomics/TopPart'
import { BetweenDiagonals } from 'components/Tokenomics/BetweenDiagonals'
import { TokenUtility } from 'components/Tokenomics/TokenUtility'
import { CommunityReviews } from 'components/Tokenomics/CommunityReviews'
import { Ecosystem } from 'components/Tokenomics/Ecosystem'

const Tokenomics: React.FC = () => {
  return (
    <Layout>
      <TopPart />
      <BetweenDiagonals />
      <TokenUtility />
      <Ecosystem />
      <CommunityReviews />
      {/* <FAQ/> */}
    </Layout>
  )
}

export default Tokenomics
