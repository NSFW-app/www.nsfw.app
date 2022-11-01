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
        top: -40,
        '@xs': { display: 'none', width: 0 },
        '@lg': { display: 'flex', width: '40vw' },
        svg: {
          transition: '0.3s',
        },
      }}
    >
      <BlopOrange
        css={{
          position: 'absolute',
          left: '32%',
          top: 0,
          height: '8vw',
          width: '8vw',
          '@xl': {
            top: 0,
          },
        }}
      />
      <BlopYellow
        css={{
          position: 'absolute',
          left: '53%',
          top: -10,
          height: '10vw',
          width: '10vw',
        }}
      />
      <BlopPink
        css={{
          position: 'absolute',
          left: -100,
          top: 0,
          height: '25vw',
          width: '25vw',
          transform: 'rotate(260deg)',
          '@xl': {
            top: -80,
          },
        }}
      />
      <BlopViolet
        css={{
          position: 'absolute',
          left: '35%',
          top: '30%',
          height: '20vw',
          width: '20vw',
        }}
      />
      <BlopPurple
        css={{
          position: 'absolute',
          '@lg': {
            top: 240,
            left: '6%',
          },
          '@xl': {
            top: 300,
            left: '15%',
          },
        }}
      />
      <BlopGreen
        css={{
          position: 'absolute',
          left: '75%',
          top: '110%',
          height: '7vw',
          width: '7vw',
        }}
      />
    </Flex>
  )
}
