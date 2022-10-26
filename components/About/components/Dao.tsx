import {
  Flex,
  Heading,
  Icon,
  Text,
  Button,
  Box,
  Anchor,
  Stitches,
} from '@nsfw-app/ui'
import { InnerGrid } from './Block/Blocks'
import { spaces } from 'config'

const ProposalCard = Stitches.styled(Flex, {
  flexDirection: 'column',
  backgroundColor: '$gray300',
  gap: '10px',
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
    maxWidth: '320px',
    margin: '-5vw 0 0 2vw',
  },
})

const DelegatesCard = Stitches.styled(Flex, {
  flexDirection: 'column',
  backgroundColor: '$gray300',
  gap: '11px',
  padding: '40px ',
  marginTop: '-5vw',
  borderRadius: '8px',
  minWidth: '300px',
  '@lg': {
    maxWidth: '320px',
  },
})

const DoaCardIcon = Stitches.styled(Flex, {
  padding: '10px',
  backgroundColor: '$gray100',
  borderRadius: '100%',
  border: '1px solid $gray600',
  width: '50px',
  height: '50px',
})

const BackgroundBlurIcons: React.FC = () => {
  return (
    <>
      <Flex
        css={{
          position: 'absolute',
          top: -20,
          left: -150,
          filter: 'blur(25px) opacity(0.33)',
          zIndex: 1,
        }}
      >
        <Icon icon='Asterisk' css={{ width: '400px', height: '400px' }} />
      </Flex>
      <Flex
        css={{
          position: 'absolute',
          top: 130,
          left: 330,
          filter: 'blur(25px) opacity(0.35)',
          zIndex: 1,
        }}
      >
        <Icon
          icon='Asterisk'
          css={{
            width: '300px',
            height: '300px',
            '@sm': { display: 'none' },
            '@lg': { display: 'block' },
          }}
        />
      </Flex>
      <Flex
        css={{
          position: 'absolute',
          top: 330,
          left: 130,
          filter: 'blur(30px) opacity(0.45)',
          zIndex: 1,
        }}
      >
        <Icon icon='Asterisk' css={{ width: '200px', height: '200px' }} />
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
          '@lg': { minWidth: '300px' },
        }}
      >
        <Heading as='h3' css={{ marginBottom: spaces[3] }}>
          Participate in the DAO
        </Heading>

        <Text subText>
          Part of being DAO-run means holders of the NSFW token are able to
          participate in governance proposals that inform the direction of this
          project.
        </Text>
      </Flex>

      <ProposalCard>
        <DoaCardIcon center>
          <Text css={{ fontSize: '30px' }}>💎</Text>
        </DoaCardIcon>
        <Heading as='h4' css={{ marginTop: '10px' }}>
          Proposals
        </Heading>
        <Text type='body2' subText css={{ margin: '15px 0 22px 0' }}>
          We support the right of (legal) freedom of expression, without
          corporate and federal oversight.
        </Text>
        <Button theme='primary' css={{ padding: '10px 10px', fontWeight: 400 }}>
          View proposals in discussion
        </Button>
        {/* <Button theme='secondary'>Proposals In Discussion</Button> */}
        <Anchor
          href='#'
          css={{
            color: '$violet800',
            marginTop: '10px',
            svg: {
              transform: 'translateX(0)',
              transition: '0.2s',
            },
            ':hover': {
              svg: {
                transform: 'translateX(4px)',
                transition: '0.3s',
              },
            },
          }}
        >
          <Flex row>
            <Text type='body2' css={{ color: '$violet800' }}>
              View past proposals
            </Text>
            <Icon
              icon='Arrow'
              css={{
                paddingLeft: spaces[1],
                '.primary': {
                  stroke: '$violet800',
                },
              }}
            />
          </Flex>
        </Anchor>
      </ProposalCard>

      <DelegatesCard>
        <Box>
          <DoaCardIcon center>
            <Text css={{ fontSize: '30px' }}>🤝</Text>
          </DoaCardIcon>
          <Heading as='h4' css={{ marginTop: '16px' }}>
            Delegates
          </Heading>
          <Text type='body2' subText css={{ margin: '25px 0' }}>
            Work in the industrsy and can condribute your skills? Become a
            delegate.
          </Text>
        </Box>

        <Button theme='primary' css={{ padding: '10px', fontWeight: 400 }}>
          View delegate proposals
        </Button>
      </DelegatesCard>
    </InnerGrid>
  )
}
