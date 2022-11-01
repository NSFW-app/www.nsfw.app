import { GridContent, GridSection } from 'components/GridLayout'
import { DiagonalBgBreak } from 'components/DiagonalBgBreak'
import { Flex } from '@nsfw-app/ui'
import { Heading, Text } from 'components/Typography'
import { spaces } from 'config'
import { InnerGrid } from 'components/About/components/Block/Blocks'
import { TokenUtilityGraph } from 'components/Icons/TokenUtilityGraph'
import { CheckIcon } from 'components/Icons/Check'
import { LockStake } from './components/LockStake'
import { Features } from './components/Features'

const UtilityHeading: React.FC = () => {
  return (
    <Flex column css={{ gap: '25px', marginTop: '1vw' }}>
      <Heading as='h1' css={{ marginBottom: spaces[3] }}>
        Token Utility
      </Heading>
      <Text subText type='subhead1'>
        Protocol revenue is generated from the business models from projects
        within the NSFW ecosystem.
      </Text>
      <Text subText type='subhead1'>
        We have opted for a symbiotic growth model where revenue is directed to
        participants. As the ecosystem evolves we aim to delight our users with.
      </Text>
      <Flex column css={{ gap: '25px' }}>
        <Flex row css={{ gap: '10px', alignItems: 'center' }}>
          <CheckIcon />
          <Text type='subhead1'>novel projects</Text>
        </Flex>
        <Flex row css={{ gap: '10px', alignItems: 'center' }}>
          <CheckIcon />
          <Text type='subhead1'>unique incentives</Text>
        </Flex>
        <Flex row css={{ gap: '10px', alignItems: 'center' }}>
          <CheckIcon />
          <Text type='subhead1'>distinct design</Text>
        </Flex>
      </Flex>

      <Text subText type='subhead1'>
        We have opted for a symbiotic growth model where revenue is directed to
        participants. As the ecosystem evolves we aim to delight our users with.
      </Text>
    </Flex>
  )
}

export const TokenUtility: React.FC = ({}) => {
  return (
    <GridSection
      css={{
        backgroundColor: '$gray100',
        position: 'relative',
      }}
    >
      <DiagonalBgBreak
        css={{ borderColor: '$gray100 $gray500 $gray100 $gray500' }}
      />
      <GridContent
        columns={{
          tablet: '1 / 13',
          desktop: '1 / 13',
        }}
      >
        <InnerGrid
          css={{
            marginTop: '14vw',
            '@lg': { gridTemplateColumns: 'repeat(2,2fr)' },
          }}
        >
          <UtilityHeading />
          <Flex
            center
            css={{ '@xs': { marginTop: '-14vw' }, '@sm': { marginTop: 0 } }}
          >
            <TokenUtilityGraph css={{ width: '100%' }} />
          </Flex>
        </InnerGrid>
      </GridContent>
    </GridSection>
  )
}
