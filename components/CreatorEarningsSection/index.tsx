import { Flex, Heading, Text } from '@nsfw-app/ui'
import { CreatorEarningsTable } from 'components/CreatorEarningsTable'
import { GridContent, GridSection } from 'components/GridLayout'

export const CreatorEarningsSection = () => {
  return (
    <GridSection css={{ overflowX: 'auto', paddingBottom: '64px' }}>
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '3 / 11',
        }}
      >
        <Flex column css={{ padding: '24px 8px' }}>
          <Heading as='h2'>Earnings</Heading>
          <Text subText>Some text about earning heaps of red rockets</Text>
          <CreatorEarningsTable />
        </Flex>
      </GridContent>
    </GridSection>
  )
}
