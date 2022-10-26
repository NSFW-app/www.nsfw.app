import { Flex, Icon, Button, Box, Stitches } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { InnerGrid } from './Block/Blocks'
import { spaces } from 'config'
import { ArrowLink } from 'components/ArrowLink'
import { AsteriskColor } from 'components/Icons/AsteriskColor'

const ProposalCard = Stitches.styled(Flex, {
  flexDirection: 'column',
  backgroundColor: '$gray300',
  gap: '15px',
  padding: '40px',
  borderRadius: '8px',
  minWidth: '300px',
  justifyContent: 'center',
  zIndex: 3,
  marginBottom: '30px',
  '@sm': {
    marginTop: '20px',
    marginBottom: '50px',
  },
  '@lg': {
    maxWidth: '304px',
    margin: '-5vw 0 0 4vw',
    justifySelf: 'end',
  },
})

const DelegatesCard = Stitches.styled(Flex, {
  flexDirection: 'column',
  backgroundColor: '$gray300',
  gap: '16px',
  padding: '40px ',
  marginTop: '-5vw',
  borderRadius: '8px',
  minWidth: '300px',
  '@lg': {
    maxWidth: '304px',
  },
})

const DoaCardIcon = Stitches.styled(Flex, {
  padding: '10px',
  backgroundColor: '$gray100',
  borderRadius: '100%',
  border: '1px solid $gray500',
  width: '50px',
  height: '50px',
})

const BackgroundBlurIcons: React.FC = () => {
  return (
    <>
      <Flex
        css={{
          position: 'absolute',
          top: 50,
          left: -150,
          filter: 'blur(20px) opacity(0.23)',
          zIndex: 1,
        }}
      >
        <AsteriskColor
          css={{
            '@xs': {
              width: '200px',
              height: '200px',
            },
            '@md': {
              width: '400px',
              height: '400px',
            },
          }}
        />
      </Flex>

      <Flex
        css={{
          position: 'absolute',
          top: 230,
          left: 420,
          filter: 'blur(20px) opacity(0.25)',
          zIndex: 1,
        }}
      >
        <AsteriskColor
          css={{
            width: '200px',
            height: '200px',
            '@xs': { display: 'none' },
            '@lg': { display: 'block' },
          }}
        />
      </Flex>

      <Flex
        css={{
          position: 'absolute',
          top: 460,
          left: 220,
          filter: 'blur(20px) opacity(0.35)',
          zIndex: 1,
        }}
      >
        <AsteriskColor
          css={{
            width: '100px',
            height: '100px',
            '@xs': { display: 'none' },
            '@lg': { display: 'block' },
          }}
        />
      </Flex>
    </>
  )
}

export const DAO = () => {
  return (
    <InnerGrid>
      <BackgroundBlurIcons />
      <Flex
        column
        css={{
          zIndex: 2,
          '@lg': { minWidth: '320px' },
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
