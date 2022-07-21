import NextImage from 'next/image'
import { Box, Flex } from '@nsfw/ui'
import { GridContent, GridSection } from 'components/GridLayout'

export const HeroImageSection = () => {
  return (
    <GridSection
      css={{
        backgroundColor: '$gray500',
        position: 'relative',
      }}
    >
      <Box
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          borderStyle: 'solid',
          borderWidth: '0 100vw 12vw 0',
          borderColor: '$gray500 $gray100 $gray500 $gray500',
          marginLeft: '-14px', // account for webkit scrollbar width
        }}
      />
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
        <Flex center fullWidth css={{ backgroundColor: 'transparent' }}>
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
