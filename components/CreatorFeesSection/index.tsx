import { Flex, Heading, Text } from '@nsfw-app/ui'
import { Card } from 'components/ Card'
import { CreatorEarningsTable } from 'components/CreatorEarningsTable'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'
import { GridContent, GridSection } from 'components/GridLayout'
import { SectionHeading } from 'components/SectionHeading'

export const CreatorFeesSection = () => {
  return (
    <GridSection
      id='fees'
      css={{
        padding: '128px 16px 64px',
        position: 'relative',
        backgroundColor: '$gray500',
        '@lg': {
          padding: '368px 0px 128px 0',
        },
      }}
    >
      <DiagonalBgBreak />
      <GridContent
        columns={{
          tablet: '2 / 8',
          desktop: '3 / 11',
        }}
        css={{
          zIndex: 1,
          height: 'auto',
          backgroundColor: 'transparent',
          marginTop: '-8vw',
        }}
      >
        <SectionHeading>
          <Heading as='h2'>Fees</Heading>
          <Text subText>
            Keep 100% of your earnings with <strong>0% fees.</strong>
          </Text>
        </SectionHeading>
        <Card>
          <CreatorEarningsTable />
        </Card>
      </GridContent>
    </GridSection>
  )
}
