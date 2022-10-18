import { Flex, Heading, Text, Span } from '@nsfw-app/ui'
import { InnerGrid } from './Block/Blocks'
import { spaces } from 'config'
import Image from 'next/image'

export const Operate = () => {
  return (
    <InnerGrid css={{ marginTop: '10vw' }}>
      <Flex
        column
        css={{
          backgroundColor: '$gray300',
          gap: '40px',
          padding: '20px 30px',
          borderRadius: '8px',
          minWidth: '250px',
          justifyContent: 'center',
          marginBottom: '30px',
          height: '100%',
        }}
      >
        <Image
          src='/svg/toroid-circle.svg'
          height={240}
          width={240}
          alt='img'
        />
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
          <Heading as='h4' css={{ lineHeight: 1.2 }}>
            Community Portal
          </Heading>
        </Flex>
      </Flex>

      <Flex column css={{ gap: '50px' }}>
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
          <Image src='/svg/cone.svg' height={105} width={95} alt='img' />
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
          <Image src='/svg/playbook.svg' height={105} width={95} alt='img' />
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
        }}
      >
        <Heading as='h4' css={{ marginBottom: spaces[3] }}>
          How we operate
        </Heading>

        <Text subText>
          Drawing from collective leadership experience spanning 30 years we are
          commited to creating an inclusive and transparent DAO which pioneers a
          new type of modern workplace.
        </Text>
      </Flex>
    </InnerGrid>
  )
}
