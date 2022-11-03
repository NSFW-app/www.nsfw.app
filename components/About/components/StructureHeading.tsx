import { Flex } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { spaces } from 'config'

export const StructureHeading: React.FC = ({}) => {
  return (
    <>
      <Heading as='h1' css={{ marginBottom: spaces[3] }}>
        Organisational structure
      </Heading>

      <Flex column center>
        <Flex
          column
          css={{
            gap: '20px',
            maxWidth: '800px',
            justifyContent: 'center',
            '@xs': { textAlign: 'center' },
            '@md': { textAlign: 'left' },
          }}
        >
          <Text type='subhead1' subText>
            The core team is supported by a community elected delegates and peer
            reviewed contributors.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
