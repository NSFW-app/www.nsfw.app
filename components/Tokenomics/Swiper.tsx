import { Text, Flex, Grid, Heading, Stitches, Anchor, Icon } from '@nsfw-app/ui'
import Image from 'next/image'
import { styled } from '@stitches/react'
import { Carousel } from '@mantine/carousel'
import { CreatorsData } from './data/ContentCreators'
import { useEffect, useState } from 'react'
import { getSelectorsByUserAgent } from 'react-device-detect'

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

const PreviousIcon = () => {
  return (
    <Icon
      icon='Arrow'
      css={{
        backgroundColor: '$voilet100',
        borderRadius: '100%',
        padding: '10px',
        margin: '8px',
        transform: 'rotate(180deg)',
      }}
    />
  )
}
const NextIcon = () => {
  return (
    <Icon
      icon='Arrow'
      css={{
        backgroundColor: '$voilet100',
        borderRadius: '100%',
        padding: '10px',
        margin: '8px',
      }}
    />
  )
}

export const SwiperComponent = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const { isMobile } = getSelectorsByUserAgent(navigator.userAgent)
    if (!isMobile) {
      setIsDesktop(true)
    }
  }, [])

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
      withControls={isDesktop ? true : false}
      slideGap={isDesktop ? 50 : 10}
      sx={{
        padding: isDesktop ? '50px 35px' : '20px 0px',
        backgroundColor: `${Stitches.theme.colors.gray400}`,
      }}
      breakpoints={[
        { maxWidth: 'xs', slideSize: '85%' },
        { maxWidth: 'sm', slideSize: '88%' },
        { maxWidth: 'md', slideSize: '60%' },
        { maxWidth: 'lg', slideSize: '50%' },
        { maxWidth: 'xl', slideSize: '33.33%' },
      ]}
      loop={true}
      align='center'
      nextControlIcon={<NextIcon />}
      previousControlIcon={<PreviousIcon />}
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
