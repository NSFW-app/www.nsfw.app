import { TokenomicsGraph } from 'components/Icons/TokenomicsGraph'
import { Flex, Heading, Text } from '@nsfw-app/ui'

export const TokenSupply: React.FC = ({}) => {
  return (
    <Flex
      column
      center
      css={{
        marginTop: '10vw',
        gap: '40px',
        '@xs': { display: 'none' },
        '@md': { display: 'flex' },
      }}
    >
      <Heading as='h3'>Token supply</Heading>
      <Text type='body1' subText>
        We have a fixed supply of 1B tokens (1,000,000,000) which was voted in
        via NIP-4. The fixed supply token allocations are outlined below.
      </Text>
      <Flex>
        <TokenomicsGraph
          css={{
            width: '100%',
            '@md': {
              marginLeft: '5rem',
            },
            '@lg': { marginLeft: '7rem' },
          }}
        />
      </Flex>
    </Flex>
  )
}
