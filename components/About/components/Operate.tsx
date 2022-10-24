import { Flex, Heading, Text, Span, Anchor, Icon } from '@nsfw-app/ui'
import { InnerGrid } from './Block/Blocks'
import { spaces } from 'config'
import { BlopOrange } from '../Icons/Blops/BlopOrange'
import { BlopGreen } from '../Icons/Blops/BlopGreen'
import { BlopViolet } from '../Icons/Blops/BlopViolet'

export const Operate = () => {
  return (
    <InnerGrid css={{ marginTop: '10vw' }}>
      <Flex
        css={{
          backgroundColor: '$gray300',
          gap: '40px',
          padding: '20px 30px',
          borderRadius: '8px',
          minWidth: '250px',
          justifyContent: 'center',
          marginBottom: '30px',
          height: '100%',
          '@sm': { flexDirection: 'row' },
          '@lg': { flexDirection: 'column' },
        }}
      >
        <BlopViolet css={{ width: '100%' }} />
        <Flex column css={{ gap: '10px', justifyContent: 'center' }}>
          <Span>
            <Text
              type='body4'
              css={{
                backgroundColor: '$voilet100',
                color: '$gray900',
                display: 'inline',
                padding: '2px 6px',
                borderRadius: '4px',
              }}
            >
              OPEN SOURCE
            </Text>
          </Span>
          <Heading as='h4' css={{ lineHeight: 1.2, color: '$voilet100' }}>
            Community Portal
          </Heading>
        </Flex>
      </Flex>

      <Flex column css={{ gap: '35px' }}>
        <Flex
          row
          css={{
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
          }}
        >
          <BlopOrange css={{}} />
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
        </Flex>

        <Flex
          row
          css={{
            backgroundColor: '$gray300',
            gap: '30px',
            borderRadius: '8px',
            minWidth: '280px',
            padding: '30px ',
            height: '100%',
            justifyContent: 'space-around',
            '@lg': {
              maxWidth: '300px',
            },
          }}
        >
          <BlopGreen />
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
        </Flex>
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
        <Anchor
          href='#'
          css={{
            color: '$voilet100',
            marginTop: '20px',
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
          <Flex row css={{ justifySelf: 'end' }}>
            <Text type='body2' css={{ color: '$voilet100' }}>
              More info
            </Text>
            <Icon
              icon='Arrow'
              css={{
                paddingLeft: spaces[1],
                '.primary': {
                  stroke: '$voilet100',
                },
              }}
            />
          </Flex>
        </Anchor>
      </Flex>
    </InnerGrid>
  )
}
