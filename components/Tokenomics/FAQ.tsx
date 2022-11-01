import { DiagonalBgBreak } from 'components/DiagonalBgBreak'
import { GridContent, GridSection } from 'components/GridLayout'
import { Heading, Text } from 'components/Typography'
import { spaces } from 'config'
import { FAQitem } from './components/FAQs/FaqItem'
import { FAQdata } from './data/FAQ'

export const FAQ: React.FC = () => {
  return (
    <GridSection
      css={{
        backgroundColor: '$gray100',
        position: 'relative',
        paddingBottom: '100px',
        '@xs': {
          paddingTop: '100px',
        },
        '@lg': {
          paddingTop: '155px',
        },
      }}
    >
      <DiagonalBgBreak
        css={{ borderColor: '$gray100 $gray400 $gray100 $gray400', zIndex: 1 }}
      />
      <GridContent
        columns={{
          tablet: '1 / 9',
          desktop: '1 / 13',
        }}
        css={{ zIndex: 2 }}
      >
        <Heading as='h1' css={{ '@md': { marginBottom: spaces[4] } }}>
          FAQs
        </Heading>
        <Text
          css={{
            wordSpacing: 2,
            color: '$gray800',
            '@md': {
              maxWidth: '400px',
              marginBottom: spaces[5],
            },
          }}
          type='subhead1'
        >
          Below is a list of topics with the most frequently asked questions
          about the NSFW.app network.
        </Text>

        {FAQdata.map((faq, i) => {
          return (
            <FAQitem
              id={faq.id}
              key={i + faq.heading}
              heading={faq.heading}
              body={faq.body}
            />
          )
        })}
      </GridContent>
    </GridSection>
  )
}
