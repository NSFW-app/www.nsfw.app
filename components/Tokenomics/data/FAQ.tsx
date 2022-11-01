import { Anchor } from '@nsfw-app/ui'
import { Text } from 'components/Typography'

export const FAQdata = [
  {
    id: '1',
    heading: 'How do I purchase the NSFW token?',
    body: (
      <Text type='body1' css={{ cursor: 'default', color: '$gray800' }}>
        {' '}
        $NSFW can be purchased on UniSwap using the step by step instructions
        here: TODO link to How To Purchase page.
      </Text>
    ),
  },
  {
    id: '2',
    heading: 'Where can I find the offical contract?',
    body: (
      <Text
        type='body1'
        css={{
          cursor: 'default',
          color: '$gray800',
        }}
      >
        {' '}
        You can find the $NSFW contract page{' '}
        <Anchor
          nounderline
          href='#'
          css={{
            color: '$violet300',
          }}
        >
          here.
        </Anchor>
      </Text>
    ),
  },
]
