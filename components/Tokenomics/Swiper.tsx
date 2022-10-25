import { Text, Flex, Grid, Heading, Icon, Stitches, Anchor } from '@nsfw-app/ui'
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
  return (
    <Carousel
      slideSize='27.33%'
      dragFree
      withControls={false}
      slideGap={50}
      sx={{
        padding: '50px 0',
        backgroundColor: `${Stitches.theme.colors.gray400}`,
      }}
      breakpoints={[
        { maxWidth: 'xs', slideSize: '80%', slideGap: 10 },
        { maxWidth: 'sm', slideSize: '70%', slideGap: 10 },
        { maxWidth: 'md', slideSize: '55%' },
        { maxWidth: 'lg', slideSize: '55%' },
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
