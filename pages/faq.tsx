import { Layout } from 'components/Layout'
import { OperationResult } from 'urql'
import { serialize } from 'next-mdx-remote/serialize'
import { Flex, Heading, Text } from '@nsfw-app/ui'

import { sizes, spaces } from 'config'
import { SerializedFAQ, FAQs, FAQsResponse } from 'lib/cms/queries/faqs'
import { getCMSClient } from 'lib/cms/client'
import { GridContent, GridSection } from 'components/GridLayout'
import { Accordion } from 'components/Accordion'

interface FAQProps {
  data: SerializedFAQ[]
  filterValues: string[]
}
const FAQPage = ({ data, filterValues }: FAQProps) => {
  return (
    <Layout>
      <GridSection>
        <GridContent
          columns={{
            tablet: '2 / 8',
            desktop: '3 / 11',
          }}
        >
          <Flex
            center
            column
            css={{
              textAlign: 'center',
              marginTop: sizes.navigationHeight,
              paddingTop: sizes.verticalSectionPadding,
              paddingBottom: sizes.verticalSectionPadding,
            }}
          >
            <Heading css={{ marginBottom: spaces[3] }}>FAQs</Heading>
            <Text
              type='body1'
              subText
              css={{
                marginBottom: spaces[2],
                '@md': { width: '80%' },
              }}
            >
              Find answers to frequently asked questions.
            </Text>
            <Accordion data={data} filterValues={filterValues} />
          </Flex>
        </GridContent>
      </GridSection>
    </Layout>
  )
}

/**
 * This function gets called at build time on server-side.
 * - pre-rendered (for SEO)
 * - https://nextjs.org/docs/basic-features/data-fetching/get-static-props
 */
export async function getStaticProps() {
  const client = getCMSClient()
  let result: OperationResult<FAQsResponse>
  let data: SerializedFAQ[] = []
  let filterValues: string[] = []

  if (client) {
    result = await client.query(FAQs, {}).toPromise()
    const rawData = result?.data?.faqs || []

    // Convert the Markdown into a compiled source used by MDX
    // https://graphcms.com/blog/nextjs-graphcms-ssg-api-routes#statically-generate-each-event
    for (const item of rawData) {
      data.push({
        ...item,
        content: await serialize(item.content),
      })
    }

    for (const item of data) {
      for (const category of item.category) {
        if (!filterValues.includes(category)) {
          filterValues.push(category)
        }
      }
    }
  }

  return {
    props: { data, filterValues },
    // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    // revalidate: 60 * 60, // Cache response for 1 hour (60 seconds * 60 minutes)
  }
}

export default FAQPage
