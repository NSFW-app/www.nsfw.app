import { Flex } from '@nsfw-app/ui'
import { BlopGreen } from 'components/Icons/Blops/BlopGreen'
import { BlopOrange } from 'components/Icons/Blops/BlopOrange'
import { BlopPink } from 'components/Icons/Blops/BlopPink'
import { BlopPurple } from 'components/Icons/Blops/BlopPurple'
import { BlopViolet } from 'components/Icons/Blops/BlopViolet'
import { BlopYellow } from 'components/Icons/Blops/BlopYellow'

export const BlopsComponents: React.FC = () => {
  return (
    <Flex
      css={{
        position: 'relative',
        top: -100,
        '@xs': { display: 'none', width: 0 },
        '@lg': { display: 'flex', width: '40vw' },
      }}
    >
      <BlopOrange
        css={{
          position: 'absolute',
          left: '32%',
          top: -40,
          minHeight: '9vw',
          minWidth: '9vw',
        }}
      />
      <BlopYellow
        css={{
          position: 'absolute',
          left: '53%',
          top: -50,
          height: '13vw',
          minWidth: '13vw',
        }}
      />
      <BlopPink
        css={{
          position: 'absolute',
          left: -100,
          top: -60,
          minHeight: '25vw',
          minWidth: '25vw',
          transform: 'rotate(260deg)',
        }}
      />
      <BlopViolet
        css={{
          position: 'absolute',
          left: '35%',
          top: '30%',
          height: '22vw',
          width: '22vw',
        }}
      />
      <BlopPurple
        css={{
          position: 'absolute',
          '@lg': {
            left: '1%',
            top: '80%',
          },
          '@xxl': {
            left: '11%',
            top: '99%',
          },
        }}
      />
      <BlopGreen
        css={{
          position: 'absolute',
          left: '80%',
          top: '110%',
          height: '7vw',
          width: '7vw',
        }}
      />
    </Flex>
  )
}
