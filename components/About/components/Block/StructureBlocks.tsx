import { Grid, Stitches } from '@nsfw-app/ui'
import { structureData } from '../../data/data'
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
          key={`${i}-${card.emoji}`}
          body={card.body}
          heading={card.heading}
          subheading={card.subheading}
          bullets={card.bullets}
          gradient={card.gradient}
          href={card.href}
          emoji={card.emoji}
        />
      ))}
    </InnerGrid>
  )
}
