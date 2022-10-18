import { Flex, Heading, Icon, Text, Button, Box, Anchor } from '@nsfw-app/ui'
import { InnerGrid } from './Block/Blocks'
import { spaces } from 'config'
import { Link } from 'components/Link'
import Image from 'next/image'

export const DAO = () => {
  return (
    <InnerGrid>
      <Flex
        column
        css={{
          '@lg': { minWidth: '350px' },
        }}
      >
        <Heading as='h4' css={{ marginBottom: spaces[3] }}>
          Participate in the DAO
        </Heading>

        <Text subText>
          Part of being DAO-run means holders of the NSFW token are able to
          participate in governance proposals that inform the direction of this
          project.
        </Text>
      </Flex>

      <Flex
        column
        css={{
          backgroundColor: '$gray300',
          gap: '10px',
          padding: '40px 30px',
          borderRadius: '8px',
          minWidth: '280px',
          justifyContent: 'center',
          marginBottom: '30px',
          '@sm': {
            marginTop: '20px',
            marginBottom: '50px',
          },
          '@lg': {
            maxWidth: '310px',
            margin: '-5vw 0 0 2vw',
          },
        }}
      >
        <Image
          src='/svg/diamond.svg'
          height='54px'
          width='54px'
          layout='fixed'
          alt='diamond'
        />
        <Heading as='h4' css={{ marginTop: '10px' }}>
          Proposals
        </Heading>
        <Text type='body2' subText css={{ margin: '15px 0 35px 0' }}>
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
            color: '$voilet100',
            marginTop: '10px',
            ':hover': {
              svg: {
                transform: 'translateX(2px)',
              },
            },
          }}
        >
          <Text css={{ color: '$voilet100' }}>View past proposals</Text>
          <Icon
            icon='Arrow'
            css={{
              paddingLeft: spaces[1],
              '.primary': {
                stroke: '$voilet100',
              },
            }}
          />
        </Anchor>
      </Flex>

      <Flex
        column
        css={{
          backgroundColor: '$gray300',
          gap: '11px',
          padding: '40px 30px',
          marginTop: '-5vw',
          borderRadius: '8px',
          minWidth: '280px',
          justifyContent: 'space-between',
          '@lg': {
            maxWidth: '310px',
          },
        }}
      >
        <Box>
          <Image
            src='/svg/hand-shake.svg'
            height='54px'
            width='54px'
            layout='fixed'
            alt='diamond'
          />
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
      </Flex>
    </InnerGrid>
  )
}
