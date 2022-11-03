import { Flex, Button, Box, Stitches, Anchor, Icon } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { InnerGrid } from './Block/Blocks'
import { APP_ROUTES, EXTERNAL_LINKS, spaces } from 'config'
import { ArrowLink } from 'components/ArrowLink'
import { BackgroundBlurIcons } from 'components/BackgroundBlurAsterisk'

const ProposalCard = Stitches.styled(Flex, {
  flexDirection: 'column',
  backgroundColor: '$gray300',
  gap: '15px',
  padding: '40px',
  borderRadius: '8px',
  justifyContent: 'center',
  zIndex: 3,
  '@lg': {
    justifySelf: 'end',
  },
})

const DelegatesCard = Stitches.styled(Flex, {
  flexDirection: 'column',
  backgroundColor: '$gray300',
  gap: '16px',
  padding: '40px ',
  borderRadius: '8px',
})

const DoaCardIcon = Stitches.styled(Flex, {
  padding: '10px',
  backgroundColor: '$gray100',
  borderRadius: '100%',
  border: '1px solid $gray500',
  width: '50px',
  height: '50px',
})

export const DAO = () => {
  return (
    <InnerGrid>
      <BackgroundBlurIcons />
      <Flex
        column
        css={{
          zIndex: 2,
          justifyContent: 'center',
          '@xs': { textAlign: 'center' },
          '@md': { textAlign: 'start' },
        }}
      >
        <Heading
          as='h1'
          css={{
            marginBottom: spaces[3],
          }}
        >
          How to participate?
        </Heading>

        <Text type='subhead1' subText>
          Holders of the <Anchor href={APP_ROUTES.TOKENOMICS}>NSFW+</Anchor>{' '}
          token can vote on proposals that shape the direction of this project.
        </Text>
      </Flex>

      <ProposalCard>
        <DoaCardIcon center>
          <Text css={{ fontSize: '30px' }}>💎</Text>
        </DoaCardIcon>
        <Heading as='h2' css={{ color: '$voilet300' }}>
          Vote
        </Heading>
        <Text type='body2' subText css={{ margin: '15px 0 22px 0' }}>
          Proposals are suggested by the core team or community and voted on by
          token holders.
        </Text>
        {/* FIXME: Should be a nice Component <ButtonWithIcon /> or similar */}
        <Button
          onClick={() => {
            window.open(EXTERNAL_LINKS.DISCORD_PROPOSALS_CHANNEL, '_blank')
          }}
          theme='primary'
          css={{ padding: '10px 10px', fontWeight: 500 }}
        >
          <Flex row css={{ gap: '5px' }}>
            Discuss proposals{' '}
            {/* <Icon
              icon='ExternalLink'
              css={{ '.primary': { stroke: '$gray900' } }}
            /> */}
          </Flex>
        </Button>
        <Anchor
          css={{ alignSelf: 'center', marginTop: '10px' }}
          target='_BLANK'
          href={EXTERNAL_LINKS.SNAPSHOT}
        >
          <Flex row css={{ gap: '5px' }}>
            Executed proposals
          </Flex>
        </Anchor>
      </ProposalCard>

      <DelegatesCard>
        <Box>
          <DoaCardIcon center>
            <Text css={{ fontSize: '30px' }}>✋</Text>
          </DoaCardIcon>
          <Heading as='h2' css={{ marginTop: '12px' }}>
            Contribute
          </Heading>
          <Text type='body2' subText css={{ margin: '25px 0' }}>
            If you have skills or networks that can help us achieve our goals,
            please apply as a volunteer.
          </Text>
        </Box>

        <Button
          onClick={() => {
            window.open(EXTERNAL_LINKS.DISCORD_VOLUNTEER_CHANNEL, '_blank')
          }}
          theme='primary'
          css={{ padding: '10px', fontWeight: 500 }}
        >
          Volunteer to contribute
        </Button>
      </DelegatesCard>
    </InnerGrid>
  )
}
