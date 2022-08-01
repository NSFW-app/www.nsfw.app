import { Heading, Text } from '@nsfw-app/ui'
import { Card } from 'components/Card'
import { CreatorFeesTable } from 'components/CreatorFeesTable'
import { GridContent, GridSection } from 'components/GridLayout'
import { SectionHeading } from 'components/SectionHeading'

export const CreatorFeesSection = () => {
  return (
    <GridSection
      id='fees'
      css={{
        position: 'relative',
        backgroundColor: '$gray500',
        paddingTop: '10%',
        paddingBottom: '10%',
      }}
    >
      <GridContent
        columns={{
          tablet: '1 / 13',
          desktop: '1 / 13',
        }}
        css={{
          zIndex: 1,
          height: 'auto',
          marginTop: '-8vw',
        }}
      >
        <SectionHeading>
          <Heading>How we compare</Heading>
          <Text type='subhead1' subText>
            Retain 100% of your earnings with <strong>0% comission</strong> on
            your content.
          </Text>
        </SectionHeading>
        <Card
          css={{
            // allow horizontal scrollable
            '@xs': { width: 'calc(100vw - 32px)' },
            '@md': { width: '100%' },
          }}
        >
          <CreatorFeesTable />
        </Card>
        {/* </Box> */}
      </GridContent>
    </GridSection>
  )
}
