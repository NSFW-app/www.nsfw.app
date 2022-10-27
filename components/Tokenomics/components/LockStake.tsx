import { Flex, Stitches } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { InnerGrid } from 'components/About/components/Block/StructureBlocks'
import { CheckIcon } from 'components/Icons/Check'
import { ArrowLink } from 'components/ArrowLink'
import { BlopYellow } from 'components/Icons/Blops/BlopYellow'
import { BlopPink } from 'components/Icons/Blops/BlopPink'

const HeaderIcon = Stitches.styled(Flex, {
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '$gray100',
  borderRadius: '100%',
  border: '1px solid $gray500',
  width: '54px',
  height: '54px',
})

export const LockStake: React.FC = ({}) => {
  return (
    <InnerGrid css={{ '@lg': { marginTop: '8vw' } }}>
      <Flex
        column
        css={{
          position: 'relative',
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
        <BlopPink
          css={{
            position: 'absolute',
            filter: 'blur(10px) opacity(0.2)',
            transform: 'rotate(280deg)',
            '@xs': {
              height: '250px',
              width: '250px',
              right: 10,
              top: 100,
            },
            '@md': {
              right: 30,
              top: 30,
              height: '350px',
              width: '350px',
            },
          }}
        />
        <Flex column css={{ gap: '35px' }}>
          <Flex row css={{ gap: '15px', alignItems: 'center' }}>
            <HeaderIcon>
              <Text css={{ fontSize: '32px' }}>🪃</Text>
            </HeaderIcon>
            <Heading as='h1'>Staking (xNSFW+) </Heading>
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
          position: 'relative',
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
        <BlopYellow
          css={{
            position: 'absolute',
            filter: 'blur(10px) opacity(0.2)',
            transform: 'rotate(260deg)',
            '@xs': {
              height: '250px',
              width: '250px',
              right: 10,
              top: 50,
            },
            '@md': {
              right: 0,
              top: 20,
              height: '350px',
              width: '350px',
            },
          }}
        />
        <Flex row css={{ gap: '15px', alignItems: 'center' }}>
          <HeaderIcon>
            <Text css={{ fontSize: '32px' }}>🔐</Text>
          </HeaderIcon>
          <Heading as='h1'>Locking (veNSFW+) </Heading>
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
          <Flex>
            <CheckIcon css={{ height: 14, width: 14 }} />
          </Flex>
          <Text type='body2'>
            Receive % of protocol revenue from all ecosystem projects
          </Text>
        </Flex>

        <ArrowLink href='#'>Join the discussion</ArrowLink>
      </Flex>
    </InnerGrid>
  )
}
