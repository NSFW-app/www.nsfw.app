import { Flex, Heading, Text, Span, Stitches } from '@nsfw-app/ui'
import { InnerGrid } from './Block/Blocks'
import { spaces } from 'config'
import { BlopOrange } from '../../Icons/Blops/BlopOrange'
import { BlopGreen } from '../../Icons/Blops/BlopGreen'
import { BlopViolet } from '../../Icons/Blops/BlopViolet'
import { Link } from 'components/Link'
import { ArrowLink } from 'components/ArrowLink'

const OperateCard = Stitches.styled(Flex, {
  backgroundColor: '$gray300',
  gap: '30px',
  borderRadius: '8px',
  minWidth: '280px',
  padding: '20px',
  height: '100%',
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
  minWidth: '330px',
  justifyContent: 'center',
  '@sm': { flexDirection: 'row', justifyContent: 'space-around' },
  '@lg': { flexDirection: 'column', justifyContent: 'center' },
})

export const Operate = () => {
  return (
    <InnerGrid css={{ marginTop: '10vw' }}>
      <Link nounderline href='https://github.com/nsfw-app' target='_blank'>
        <CommPortalCard>
          <BlopViolet
            css={{
              '@sm': { height: '110px', width: '190px' },
              '@lg': { width: '100%', height: '100%' },
            }}
          />
          <Flex column css={{ gap: '10px', justifyContent: 'center' }}>
            <Span>
              <Text
                type='body4'
                css={{
                  backgroundColor: '$gray500',
                  display: 'inline',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                OPEN SOURCE
              </Text>
            </Span>
            <Heading as='h4' css={{ lineHeight: 1.2, whiteSpace: 'nowrap' }}>
              Community Portal
            </Heading>
          </Flex>
        </CommPortalCard>
      </Link>

      <Flex column css={{ gap: '35px', a: { height: '100%' } }}>
        <Link nounderline href='https://github.com/NSFW-app/ui' target='_blank'>
          <OperateCard>
            <BlopOrange css={{ height: '100%' }} />
            <Flex column css={{ gap: '10px', justifyContent: 'center' }}>
              <Span>
                <Text
                  type='body4'
                  subText
                  css={{
                    backgroundColor: '$gray500',
                    display: 'inline',
                    padding: '2px 6px',
                    borderRadius: '4px',
                  }}
                >
                  OPEN SOURCE
                </Text>
              </Span>
              <Heading as='h4' css={{ lineHeight: 1.2 }}>
                Design System
              </Heading>
            </Flex>
          </OperateCard>
        </Link>

        <Link nounderline href='#' target='_blank'>
          <OperateCard>
            <BlopGreen css={{ height: '100%' }} />
            <Flex column css={{ gap: '10px', justifyContent: 'center' }}>
              <Span>
                <Text
                  type='body4'
                  subText
                  css={{
                    backgroundColor: '$gray500',
                    display: 'inline',
                    padding: '2px 6px',
                    borderRadius: '4px',
                  }}
                >
                  OPEN SOURCE
                </Text>
              </Span>
              <Heading as='h4' css={{ lineHeight: 1.2 }}>
                DAO Playbook
              </Heading>
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
        }}
      >
        <Heading as='h3' css={{ marginBottom: spaces[3] }}>
          How we operate
        </Heading>

        <Text subText>
          Drawing from collective leadership experience spanning 30 years we are
          commited to creating an inclusive and transparent DAO which pioneers a
          new type of modern workplace.
        </Text>
        <ArrowLink href='#'>More info</ArrowLink>
      </Flex>
    </InnerGrid>
  )
}
