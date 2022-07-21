import { Grid, Stitches } from '@nsfw/ui'
import { GridContent, GridSection } from 'components/GridLayout'

import { Card } from 'components/Card'
import { data } from './data'

const InnerGrid = Stitches.styled(Grid, {
  gridGap: '16px',
  backgroundColor: 'transparent',
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})

export const CardSection: React.FC = () => {
  return (
    <GridSection
      css={{
        backgroundColor: '$gray500',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <GridContent
        columns={{
          tablet: '1 / 9',
          desktop: '1 / 13',
        }}
        css={{ backgroundColor: 'transparent' }}
      >
        <InnerGrid>
          {data.map((card, i) => (
            <Card
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
