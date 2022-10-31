import { Flex, Button, Box, Stitches } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { InnerGrid } from './Block/Blocks'
import { spaces } from 'config'
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
        }}
      >
        <Heading
          as='h1'
          css={{
            marginBottom: spaces[3],
          }}
        >
          Participate in the DAO
        </Heading>

        <Text type='subhead1' subText>
          Part of being DAO-run means holders of the NSFW token are able to
          participate in governance proposals that inform the direction of this
          project.
        </Text>
      </Flex>

      <ProposalCard>
        <DoaCardIcon center>
          <Text css={{ fontSize: '30px' }}>💎</Text>
        </DoaCardIcon>
        <Heading as='h2' css={{ color: '$voilet300' }}>
          Proposals
        </Heading>
        <Text type='body2' subText css={{ margin: '15px 0 22px 0' }}>
          We support the right of (legal) freedom of expression, without
          corporate and federal oversight.
        </Text>
        <Button theme='primary' css={{ padding: '10px 10px', fontWeight: 500 }}>
          View proposals in discussion
        </Button>
        {/* <Button theme='secondary'>Proposals In Discussion</Button> */}
        <ArrowLink href='#'>View past proposals</ArrowLink>
      </ProposalCard>

      <DelegatesCard>
        <Box>
          <DoaCardIcon center>
            <Text css={{ fontSize: '30px' }}>🤝</Text>
          </DoaCardIcon>
          <Heading as='h2' css={{ marginTop: '12px' }}>
            Delegates
          </Heading>
          <Text type='body2' subText css={{ margin: '25px 0' }}>
            Work in the industrsy and can condribute your skills? Become a
            delegate.
          </Text>
        </Box>

        <Button theme='primary' css={{ padding: '10px', fontWeight: 500 }}>
          View delegate proposals
        </Button>
      </DelegatesCard>
    </InnerGrid>
  )
}
