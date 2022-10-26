import { Flex, Heading, Text, Span, Icon } from '@nsfw-app/ui'
import { spaces } from 'config'
import { InnerGrid } from 'components/About/components/Block/Blocks'

export const Operate: React.FC = ({}) => {
  return (
    <InnerGrid
      css={{
        gridGap: '120px',
        '@lg': { gridTemplateColumns: 'repeat(2,2fr)' },
      }}
    >
      <Flex column css={{ gap: '15px' }}>
        <Flex row css={{ gap: '15px' }}>
          <Flex
            column
            css={{
              backgroundColor: '$gray300',
              gap: '20px',
              borderRadius: '8px',
              width: '50%',
              '@xs': {
                padding: '25px',
                minWidth: '150px',
              },
              '@md': {
                padding: '50px 30px',
                minWidth: '250px',
              },
            }}
          >
            <Icon icon='MetamaskOutline' css={{ alignSelf: 'start' }} />
            <Heading as='h4'>Share the platform fees</Heading>
            <Text type='body3' subText>
              XX% of platform fees are earned by NSFW stakers and lockers.
            </Text>
          </Flex>

          <Flex
            column
            css={{
              backgroundColor: '$gray300',
              gap: '20px',
              borderRadius: '8px',
              width: '50%',
              '@xs': {
                padding: '25px',
                minWidth: '150px',
              },
              '@md': {
                padding: '50px 30px',
                minWidth: '250px',
              },
            }}
          >
            <Icon icon='Asterisk' css={{ alignSelf: 'start' }} />
            <Heading as='h4'>Fast creator withdrawals</Heading>
            <Text type='body3' subText>
              Creators are able to cash out.
            </Text>
          </Flex>
        </Flex>
        <Flex
          row
          css={{
            backgroundColor: '$gray300',
            alignItems: 'center',
            gap: '30px',
            borderRadius: '8px',
            padding: '45px 30px ',
          }}
        >
          <Icon icon='BadgePolygon' />
          <Heading as='h4' css={{ lineHeight: 1.2 }}>
            We will be operating on the Polygon to enjoy low-cost fee
            environment.
          </Heading>
        </Flex>
      </Flex>

      <Flex
        column
        css={{
          // minWidth: '300px',
          textAlign: 'left',
          justifyContent: 'center',
          gap: '25px',
        }}
      >
        <Heading as='h3' css={{ marginBottom: spaces[3] }}>
          The NSFW+ token captures value from all ecosystem projects.
        </Heading>

        <Text subText>
          Each project will have its own way of generating revenue within the
          ecosystem, but the mandate across all projects share a common theme.
          Drive value to token holders with the mandate of empowering and
          rewarding content creators, fans and community members.
        </Text>
        <Text subText>
          Drive value to token holders with the mandate of empowering and
          rewarding content creators, fans and community members.
        </Text>
      </Flex>
    </InnerGrid>
  )
}
