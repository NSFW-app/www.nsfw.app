import { Heading, Flex, Text } from '@nsfw-app/ui'
import { spaces } from 'config'

export const StructureHeading: React.FC = ({}) => {
  return (
    <>
      <Heading as='h2' css={{ marginBottom: spaces[3] }}>
        NSFW App Structure
      </Heading>

      <Flex column center>
        <Flex
          column
          css={{
            gap: '20px',
            maxWidth: '800px',
            justifyContent: 'center',
            textAlign: 'left',
          }}
        >
          <Text type='body1' subText>
            The core team is supported by a dedicated “delegates” group
            responsible for the discussion of sensitive topics before it is put
            to the community for a DAO vote.
          </Text>
          <Text type='body1' subText>
            Within the #delegates group; We are commiting to complete
            transparancy into the workings of various departments, following
            Agile product development best practices.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
