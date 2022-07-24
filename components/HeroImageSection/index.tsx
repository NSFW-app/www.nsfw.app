import NextImage from 'next/image'
import { Flex } from '@nsfw-app/ui'
import { GridContent, GridSection } from 'components/GridLayout'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'

export const HeroImageSection = () => {
  return (
    <GridSection
      css={{
        backgroundColor: '$gray500',
        position: 'relative',
      }}
    >
      <DiagonalBgBreak />
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '2 / 12',
        }}
        css={{
          zIndex: 1,
          height: 'auto',
          backgroundColor: 'transparent',
          marginTop: '-8vw',
        }}
      >
        <Flex center fullWidth transparent>
          <NextImage
            src='/static/images/landing-hero.png'
            alt='NSFW landing hero'
            width={1700}
            height={962}
          />
        </Flex>
      </GridContent>
    </GridSection>
  )
}
