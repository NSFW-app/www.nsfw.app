import { Flex, Span, Stitches } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { InnerGrid } from './Block/Blocks'
import { EXTERNAL_LINKS, spaces } from 'config'
import { BlopOrange } from '../../Icons/Blops/BlopOrange'
import { BlopGreen } from '../../Icons/Blops/BlopGreen'
import { BlopViolet } from '../../Icons/Blops/BlopViolet'
import { Link } from 'components/Link'
import { ArrowLink } from 'components/ArrowLink'

const OperateCard = Stitches.styled(Flex, {
  backgroundColor: '$gray300',
  gap: '30px',
  borderRadius: '8px',
  minWidth: '150px',
  padding: '20px',
  height: '100%',
  width: '100%',
  justifyContent: 'space-around',
  '@lg': {
    maxWidth: '300px',
  },
  '&:hover': {
    backgroundColor: '$gray100',
  },
})

const CommPortalCard = Stitches.styled(OperateCard, {
  padding: '20px 30px',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  '@xs': { flexDirection: 'row', justifyContent: 'space-around' },
  '@lg': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export const Operate = () => {
  return (
    <InnerGrid>
      <Flex
        css={{
          a: { width: '100%' },
          '@xs': { order: 2 },
          '@lg': { order: 1 },
        }}
      >
        <Link nounderline href='https://github.com/nsfw-app' target='_blank'>
          <CommPortalCard>
            <BlopViolet
              css={{
                '@xs': { height: '130px', width: '150px' },
                '@lg': { width: '100%', height: '100%' },
              }}
            />
            <Flex column css={{ gap: '10px', justifyContent: 'center' }}>
              <Span>
                <Text type='pill'>OPEN SOURCE</Text>
              </Span>
              <Text type='subhead1'>Community website</Text>
            </Flex>
          </CommPortalCard>
        </Link>
      </Flex>

      <Flex
        column
        css={{
          gap: '35px',
          a: { height: '100%' },
          order: 2,
        }}
      >
        <Link nounderline href='https://github.com/NSFW-app/ui' target='_blank'>
          <OperateCard>
            <BlopOrange css={{ height: '100%' }} />
            <Flex column css={{ gap: '10px', justifyContent: 'center' }}>
              <Span>
                <Text type='pill'>OPEN SOURCE</Text>
              </Span>
              <Text type='subhead1'>Design System</Text>
            </Flex>
          </OperateCard>
        </Link>

        <Link nounderline href='#' target='_blank'>
          <OperateCard>
            <BlopGreen css={{ height: '100%' }} />
            <Flex column css={{ gap: '10px', justifyContent: 'center' }}>
              <Span>
                <Text type='pill'>PUBLIC</Text>
              </Span>
              <Text type='subhead1'>DAO Playbook</Text>
            </Flex>
          </OperateCard>
        </Link>
      </Flex>

      <Flex
        column
        css={{
          minWidth: '300px',
          textAlign: 'right',
          justifyContent: 'center',
          alignItems: 'end',
          '@xs': { order: 1, textAlign: 'center', alignItems: 'center' },
          '@md': { textAlign: 'end', alignItems: 'end' },
          '@lg': { order: 3 },
        }}
      >
        <Heading as='h1' css={{ marginBottom: spaces[3] }}>
          How we operate
        </Heading>

        <Text type='subhead1' subText>
          Drawing from decades of leadership, product management and engineering
          experience we are pioneering new ways of decentralised working.
        </Text>
        <ArrowLink href={EXTERNAL_LINKS.DEWORK} css={{ marginTop: spaces[2] }}>
          More info
        </ArrowLink>
      </Flex>
    </InnerGrid>
  )
}
