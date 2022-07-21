import { gql } from '@urql/core'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export const FAQs = gql`
  query FAQs {
    faqs(stage: PUBLISHED) {
      id
      title
      content
      category
    }
  }
`

export interface FAQ {
  id: string
  title: string
  content: string
  category: string[]
}

export interface SerializedFAQ {
  id: string
  title: string
  content: MDXRemoteSerializeResult
  category: string[]
}

export interface FAQsResponse {
  faqs: FAQ[]
}
