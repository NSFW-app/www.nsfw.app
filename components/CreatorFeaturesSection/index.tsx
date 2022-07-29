import { Grid, Heading, Stitches, Flex } from '@nsfw-app/ui'
import { GridContent, GridSection } from 'components/GridLayout'

import { FeatureCard } from 'components/FeatureCard'
import { data } from './data'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'

const InnerGrid = Stitches.styled(Grid, {
  gridGap: '16px',
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@xl': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})

export const CreatorFeaturesSection: React.FC = () => {
  return (
    <GridSection
      id='features'
      css={{
        position: 'relative',
        backgroundColor: '$gray500',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <DiagonalBgBreak />
      <GridContent
        columns={{
          tablet: '1 / 9',
          desktop: '1 / 13',
        }}
        css={{
          zIndex: 1,
          height: 'auto',
          // marginTop: '-8vw',
        }}
      >
        <Flex css={{ padding: 32 }} center fullWidth>
          <Heading as='h4'>
            We built the best crypto-powered creator platform
          </Heading>
        </Flex>
        <InnerGrid>
          {data.map((card, i) => (
            <FeatureCard
              key={`${i}-${card.primaryLink}`}
              icon={card.icon}
              heading={card.heading}
              body={card.body}
              primaryLink={card.primaryLink}
              secondaryLink={card.secondaryLink}
            />
          ))}
        </InnerGrid>
      </GridContent>
    </GridSection>
  )
}
