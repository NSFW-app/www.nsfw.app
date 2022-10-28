import { Layout } from 'components/Layout'
import { TopPart } from 'components/Tokenomics/TopPart'
import { BetweenDiagonals } from 'components/Tokenomics/BetweenDiagonals'
import { TokenUtility } from 'components/Tokenomics/TokenUtility'
import { CommunityReviews } from 'components/Tokenomics/CommunityReviews'
import { Ecosystem } from 'components/Tokenomics/Ecosystem'
import { LockStake } from 'components/Tokenomics/components/LockStake'
import { Features } from 'components/Tokenomics/components/Features'

const Tokenomics: React.FC = () => {
  return (
    <Layout>
      <TopPart />
      <BetweenDiagonals />
      <TokenUtility />
      <LockStake />
      <Features />
      <Ecosystem />
      <CommunityReviews />
      {/* <FAQ/> */}
    </Layout>
  )
}

export default Tokenomics
