import { Grid, Stitches } from '@nsfw-app/ui'
import { serviceData, structureData } from '../../data/data'
import { BlockCard } from './BlockCard'
import { StructureBlock } from './StructureBlockCard'

export const InnerGrid = Stitches.styled(Grid, {
  gridGap: '46px',
  margin: '4vw 0',
  justifyContent: 'center',
  '@lg': {
    gridTemplateColumns: 'repeat(2,2fr)',
  },
})

export const StructureBlocks: React.FC = () => {
  return (
    <InnerGrid>
      {structureData.map((card, i) => (
        <StructureBlock
          key={`${i}-${card.imagePath}`}
          body={card.body}
          heading={card.heading}
          subheading={card.subheading}
          bullets={card.bullets}
          gradient={card.gradient}
          imagePath={card.imagePath}
          href={card.href}
        />
      ))}
    </InnerGrid>
  )
}
