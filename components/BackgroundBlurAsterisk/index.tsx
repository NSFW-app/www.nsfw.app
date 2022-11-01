import { Flex } from '@nsfw-app/ui'
import { AsteriskColor } from "components/Icons/AsteriskColor"

export const BackgroundBlurIcons: React.FC = () => {
  return (
    <>
      <Flex
        css={{
          position: 'absolute',
          top: 50,
          left: -150,
          filter: 'blur(20px) opacity(0.23)',
          zIndex: 1,
        }}
      >
        <AsteriskColor
          css={{
            '@xs': {
              width: '200px',
              height: '200px',
            },
            '@md': {
              width: '400px',
              height: '400px',
            },
          }}
        />
      </Flex>

      <Flex
        css={{
          position: 'absolute',
          top: 230,
          left: 420,
          filter: 'blur(20px) opacity(0.25)',
          zIndex: 1,
        }}
      >
        <AsteriskColor
          css={{
            width: '200px',
            height: '200px',
            '@xs': { display: 'none' },
            '@lg': { display: 'block' },
          }}
        />
      </Flex>

      <Flex
        css={{
          position: 'absolute',
          top: 460,
          left: 220,
          filter: 'blur(20px) opacity(0.35)',
          zIndex: 1,
        }}
      >
        <AsteriskColor
          css={{
            width: '100px',
            height: '100px',
            '@xs': { display: 'none' },
            '@lg': { display: 'block' },
          }}
        />
      </Flex>
    </>
  )
}
