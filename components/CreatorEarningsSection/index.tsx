import { Flex, Heading, Text } from '@nsfw-app/ui'
import { CreatorEarningsTable } from 'components/CreatorEarningsTable'
import { GridContent, GridSection } from 'components/GridLayout'

export const CreatorEarningsSection = () => {
  return (
    <GridSection id='fees' css={{ overflowX: 'auto', padding: '128px 0' }}>
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '3 / 11',
        }}
      >
        <Flex column css={{ padding: '24px 8px' }}>
          <Heading as='h2'>Fees</Heading>
          <Text subText>
            Keep 100% of your earnings with <strong>0% fees.</strong>
          </Text>
          <CreatorEarningsTable />
        </Flex>
      </GridContent>
    </GridSection>
  )
}
