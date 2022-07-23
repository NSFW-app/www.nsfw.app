import type { NextPage } from 'next'
import { Layout } from 'components/Layout'
import { HeroSection } from 'components/FansHeroSection'
import { HeroImageSection } from 'components/HeroImageSection'
import { CardSection } from 'components/CardSection'
import { CardProps } from 'components/Card'
import { CreatorFeesSection } from 'components/CreatorFeesSection'

export const features: CardProps[] = [
  {
    // icon: 'Blockchain',
    heading: 'Feed your kink with global content',
    body: 'We welcome global sex positive creators of all kinks. Everyone is welcome to express themselves in a natural legally uncensored way without restrictions seen on other platforms',
    // primaryLink: 'Learn More',
    // secondaryLink: 'About Us',
  },
  {
    // icon: 'Tags',
    heading: 'Enjoy content discretely',
    body: 'Privacy is assured using Card to Crypto payments - no worries about NSFW payments on your bank statements',
    // primaryLink: 'Become a creator',
    // secondaryLink: 'View Creators',
  },
  {
    // icon: 'Coins',
    heading: 'Enjoy our creator focussed platform',
    body: 'Built by adult industry experts alongside creators working as one team',
    // primaryLink: 'About Currency',
    // secondaryLink: 'Buy Coins',
  },
]

const FansLanding: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <HeroImageSection />
      <CardSection features={features} />
    </Layout>
  )
}

export default FansLanding
