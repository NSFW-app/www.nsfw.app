import { Flex, Icon, Stitches } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { spaces } from 'config'
import { InnerGrid } from 'components/About/components/Block/Blocks'
import { BackgroundBlurIcons } from 'components/BackgroundBlurAsterisk'

const FeatureIcon = Stitches.styled(Flex, {
  justifyContent: 'center',
  padding: '10px',
  backgroundColor: '$gray100',
  borderRadius: '100%',
  border: '1px solid $gray500',
  width: '50px',
  height: '50px',
})

export const Operate: React.FC = ({}) => {
  return (
    <InnerGrid
      css={{
        gridGap: '100px',
        '@lg': { gridTemplateColumns: 'repeat(2,2fr)' },
      }}
    >
      <BackgroundBlurIcons />
      <Flex column css={{ gap: '15px', zIndex: 2 }}>
        <Flex row css={{ gap: '15px' }}>
          <Flex
            column
            css={{
              backgroundColor: '$gray300',
              gap: '15px',
              borderRadius: '8px',
              width: '50%',
              '@xs': {
                padding: '25px',
                minWidth: '150px',
              },
              '@md': {
                padding: '30px 35px 60px 35px',
                minWidth: '250px',
              },
            }}
          >
            <FeatureIcon>
              <Text css={{ fontSize: '28px' }}>💸</Text>
            </FeatureIcon>

            <Heading as='h2'>Share the platform fees</Heading>
            <Text type='body2'>
              XX% of platform fees are earned by NSFW stakers and lockers.
            </Text>
          </Flex>

          <Flex
            column
            css={{
              backgroundColor: '$gray300',
              gap: '15px',
              borderRadius: '8px',
              width: '50%',
              '@xs': {
                padding: '25px',
                minWidth: '150px',
              },
              '@md': {
                padding: '30px 35px 60px 35px',
                minWidth: '250px',
              },
            }}
          >
            <FeatureIcon>
              <Text css={{ fontSize: '28px' }}>⚡</Text>
            </FeatureIcon>
            <Heading as='h2'>Fast creator withdrawals</Heading>
            <Text type='body2'>Creators are able to cash out.</Text>
          </Flex>
        </Flex>
        <Flex
          column
          css={{
            backgroundColor: '$gray300',
            gap: '12px',
            borderRadius: '8px',
            padding: '40px',
          }}
        >
          <FeatureIcon center css={{ minHeight: '50px', minWidth: '50px' }}>
            <Icon icon='BadgePolygon' css={{ height: 22, width: 22 }} />
          </FeatureIcon>
          <Heading as='h2' css={{ lineHeight: 1.2 }}>
            We will be operating on the Polygon to enjoy low-cost fee
            environment.
          </Heading>
        </Flex>
      </Flex>

      <Flex
        column
        css={{
          textAlign: 'left',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        <Heading as='h1' css={{ marginBottom: spaces[3] }}>
          The NSFW+ token captures value from all ecosystem projects.
        </Heading>

        <Text type='subhead1' subText>
          Each project will have its own way of generating revenue within the
          ecosystem, but the mandate across all projects share a common theme.
          Drive value to token holders with the mandate of empowering and
          rewarding content creators, fans and community members.
        </Text>
        <Text type='subhead1' subText>
          Drive value to token holders with the mandate of empowering and
          rewarding content creators, fans and community members.
        </Text>
      </Flex>
    </InnerGrid>
  )
}
