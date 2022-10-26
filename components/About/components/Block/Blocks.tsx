import { Grid, Stitches } from '@nsfw-app/ui'
import { serviceData } from '../../data/data'
import { BlockCard } from './BlockCard'

export const InnerGrid = Stitches.styled(Grid, {
  gridGap: '46px',
  marginTop: '4vw',
  justifyContent: 'center',
  '@lg': {
    gridTemplateColumns: 'repeat(3,2fr)',
  },
})

export const Blocks: React.FC = () => {
  return (
    <InnerGrid>
      {serviceData.map((card, i) => (
        <BlockCard
          key={`${i}-${card.gradient}`}
          body={card.body}
          gradient={card.gradient}
          blopIcon={card.blopIcon}
        />
      ))}
    </InnerGrid>
  )
}
