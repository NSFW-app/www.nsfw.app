import {
  Text,
  Flex,
  Grid,
  Heading,
  Icon,
  Stitches,
  Anchor,
  useIsDesktopSize,
  useIsMobileSize,
} from '@nsfw-app/ui'
import Image from 'next/image'
import { styled } from '@stitches/react'
import { Carousel } from '@mantine/carousel'
import { CreatorsData } from './data/ContentCreators'

const CreatorCard = styled(Flex, {
  minHeight: '325px',
  height: '100%',
  backgroundColor: '$gray100',
  padding: '40px 55px',
  borderRadius: '8px',
  flexDirection: 'column',
  gap: '30px',
  cursor: 'grab',
  overflow: 'hidden',
  a: {
    fontSize: '14px',
  },
  p: {
    lineHeight: 1.4,
    fontWeight: 300,
  },
})


export const SwiperComponent = () => {
  const isMobile = useIsMobileSize()

  return (
    <Carousel
      // withIndicators
      slideSize='33.33%'
      styles={{
        slide: { overflowX: 'hidden' },
        control: {
          backgroundColor: `${Stitches.theme.colors.gray400}`,
          border: 0,
          opacity: 1,
          boxShadow: 'none',
        },
      }}
      dragFree
      withControls={isMobile ? false : true}
      slideGap={isMobile ? 15 : 50}
      sx={{
        padding: isMobile ? '20px 10px' : '50px 35px',
        backgroundColor: `${Stitches.theme.colors.gray400}`,
      }}
      breakpoints={[
        { maxWidth: 'xs', slideSize: '88%' },
        { maxWidth: 'sm', slideSize: '88%' },
        { maxWidth: 'md', slideSize: '60%' },
        { maxWidth: 'lg', slideSize: '50%' },
        { maxWidth: 'xl', slideSize: '33.33%' },
      ]}
      loop={true}
      align='center'
    >
      {CreatorsData.map((cc, i) => (
        <Carousel.Slide key={cc.href + i}>
          <CreatorCard>
            <Flex
              css={{
                position: 'absolute',
                overflowX: 'hidden !important',
                right: 10,
                top: -60,
                filter: 'blur(8px) opacity(0.5)',
              }}
            >
              {cc.backgroundImg}
            </Flex>
            <Grid css={{ gridTemplateColumns: '90px 2fr' }}>
              <Image
                src={cc.avatar}
                layout='fixed'
                height={70}
                width={70}
                alt='avatar'
              />
              <Flex column css={{ gap: '5px' }}>
                <Heading as='h5'>{cc.name}</Heading>
                <Text subText type='body2'>
                  {cc.lastSeen}
                </Text>
                <Anchor href={cc.href} css={{ color: '$voilet100' }}>
                  view profile
                </Anchor>
              </Flex>
            </Grid>
            <Text type='body2'>{cc.bio}</Text>
          </CreatorCard>
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}
