import { Flex, Icon } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { InnerGrid } from 'components/About/components/Block/StructureBlocks'
import { CheckIcon } from 'components/Icons/Check'
import { ArrowLink } from 'components/ArrowLink'

export const LockStake: React.FC = ({}) => {
  return (
    <InnerGrid css={{ '@lg': { marginTop: '8vw' } }}>
      <Flex
        column
        css={{
          '@xs': {
            padding: '20px',
          },
          '@md': {
            padding: '45px 65px',
          },
          justifyContent: 'space-between',
          borderRadius: '8px',
          gap: '30px',
          background:
            'linear-gradient(248.77deg, rgba(59, 172, 236, 0.1) 1.24%, rgba(52, 152, 209, 0.0885417) 44.85%, rgba(0, 0, 0, 0) 104.62%)',
        }}
      >
        <Flex column css={{ gap: '35px' }}>
          <Flex row css={{ gap: '15px' }}>
            <Icon icon='BadgeBinance' />
            <Heading type='h1'>Staking (xNSFW+) </Heading>
          </Flex>

          <Text type='body2' subText>
            Staking is a way of receiving a proportion of protocol revenue
            within the NSFW ecosystem. As a staker, you are free to enter and
            exit the share of the reward pool but for that privilege the yield
            will be proportionally lower than that of lockers.
          </Text>
          <Text type='body2' subText>
            Staked tokens will be transferable and will unlock access to DeFi
            products that will allow leverage on their positions.
          </Text>
        </Flex>

        <ArrowLink href='#'>Join the discussion</ArrowLink>
      </Flex>

      <Flex
        column
        css={{
          '@xs': {
            padding: '20px',
          },
          '@md': {
            padding: '45px 65px',
          },
          borderRadius: '8px',
          background:
            'linear-gradient(248.77deg, rgba(251, 194, 47, 0.1) 1.24%, rgba(251, 194, 47, 0.0885417) 44.85%, rgba(0, 0, 0, 0) 104.62%)',
          gap: '30px',
        }}
      >
        <Flex row css={{ gap: '15px' }}>
          <Icon icon='BadgeBinance' />
          <Heading type='h1'>Locking (veNSFW+) </Heading>
        </Flex>
        <Text type='body2' subText>
          Similar to staking, Locking is a way of receiving a proportion of
          protocol revenue within the NSFW ecosystem. The difference being
          holders who lock will not be able to exit their staked position on
          demand. Given the greater risk the yield will be proportionally
          greater to that of stakers and exponentially greater based on the
          duration of the locking period.
        </Text>
        <Text type='body2' subText>
          Proposed features:
        </Text>
        <Flex row css={{ alignItems: 'center', gap: '15px' }}>
          <CheckIcon css={{ height: 18, width: 18 }} />
          <Text type='body2'>
            Receive % of protocol revenue from all ecosystem projects
          </Text>
        </Flex>

        <ArrowLink href='#'>Join the discussion</ArrowLink>
      </Flex>
    </InnerGrid>
  )
}
