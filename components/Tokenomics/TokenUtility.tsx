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
    <Flex
      column
      css={{
        gap: '25px',
        marginTop: '1vw',
        '@xs': { textAlign: 'center', alignItems: 'center' },
        '@md': { textAlign: 'left', alignItems: 'start' },
      }}
    >
      <Heading as='h1' css={{ '@md': { marginBottom: spaces[3] } }}>
        Utility
      </Heading>

      <Text subText type='subhead1'>
        We have designed a sustainable growth model where revenue is directed to
        initiatives aligned with the DAO and its mission.
      </Text>
      <Text subText type='subhead1'>
        As the ecosystem evolves we aim to delight our users with:
      </Text>
      <Flex column css={{ gap: '25px' }}>
        <Flex row css={{ gap: '10px', alignItems: 'center' }}>
          <CheckIcon />
          <Text type='subhead1'>Novel projects</Text>
        </Flex>
        <Flex row css={{ gap: '10px', alignItems: 'center' }}>
          <CheckIcon />
          <Text type='subhead1'>Unique incentives</Text>
        </Flex>
        <Flex row css={{ gap: '10px', alignItems: 'center' }}>
          <CheckIcon />
          <Text type='subhead1'>Distinct design</Text>
        </Flex>
      </Flex>
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
