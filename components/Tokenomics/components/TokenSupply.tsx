import { TokenomicsGraph } from 'components/Icons/TokenomicsGraph'
import { Heading, Text } from 'components/Typography'
import { Flex, Span } from '@nsfw-app/ui'

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
      <Heading type='h1'>Token supply</Heading>
      <Text type='subhead1' css={{ maxWidth: '60vw' }} subText>
        We have a fixed supply of{' '}
        <Span css={{ color: '$violet300' }}> 1B tokens (1,000,000,000)</Span>{' '}
        which was voted in via NIP-4. The fixed supply token allocations are
        outlined below.
      </Text>
      <Flex>
        <TokenomicsGraph
          css={{
            width: '100%',
            '@md': {
              marginLeft: '5rem',
            },
            '@lg': { marginLeft: '6.5rem' },
          }}
        />
      </Flex>
    </Flex>
  )
}
