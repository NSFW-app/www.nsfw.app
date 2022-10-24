import { Box, Button, Flex, Heading, Text, Icon, Grid } from '@nsfw-app/ui'
import { InnerGrid } from 'components/About/components/Block/StructureBlocks'
import { CheckIcon } from 'components/Icons/Check'
import { Link } from 'components/Link'
import { spaces } from 'config'

export const Features: React.FC = ({}) => {
  const features = [
    'Lock up to 48 months',
    'Exit with penalty',
    'Consumable voting power to access execlusive perks',
    'Boosted voting power',
    'Boosted % of protocol revenue from all ecosystem projects',
    'Special role in Discord',
  ]
  return (
    <InnerGrid css={{ margin: '7vw 0' }}>
      <Flex column css={{ gap: '30px', '@lg': { padding: '0 90px' } }}>
        <Heading as='h2'>
          Lockers are also bestowed a non-transferable token
        </Heading>
        <Text subText type='body1'>
          These tokens can boost their voting weights and have the opportunity
          to “consume” their boosted voting power to participate in NFT
          purchases that are only accessible to veNSFW holders that confer
          application rewards and discounts.
        </Text>
        <Box
          css={{
            marginTop: '1vw',
            alignSelf: 'start',
            width: '80%',
            whiteSpace: 'nowrap',
          }}
        >
          <Link button uppercase theme='primary' href='#'>
            Join the discussion
            <Icon icon='Arrow' css={{ paddingLeft: spaces[1], height: 0 }} />
          </Link>
        </Box>
      </Flex>

      <Flex column css={{ gap: '15px', marginTop: '1.5vw' }}>
        <Heading as='h3' css={{  color: '$gray800' }}>
          Proposed features
        </Heading>

        <Grid css={{ gridTemplateColumns: 'repeat(2,1fr)', gridGap: '15px' }}>
          {features.map((text) => (
            <Flex
              row
              key={text}
              css={{
                minHeight: '70px',
                backgroundColor: '$gray400',
                alignItems: 'center',
                borderRadius: '8px',
                padding: '20px',
                gap: '10px',
              }}
            >
              <Box css={{ minWidth: '21px' }}>
                <CheckIcon />
              </Box>
              <Text type='body3'>{text}</Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </InnerGrid>
  )
}