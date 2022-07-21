import { Stitches, Button } from '@nsfw-app/ui'

interface Props extends Stitches.ComponentProps<typeof Button> {
  onLaunch?: () => void
}
export const LaunchButton: React.FC<Props> = ({ css, onLaunch }) => {
  return (
    <Button
      theme='primary'
      css={css}
      onClick={(e) => {
        // TODO: Do this properly
        // @ts-ignore
        window.location = process.env.NEXT_PUBLIC_SITE_DOMAIN

        if (onLaunch) {
          onLaunch()
        }
      }}
    >
      Launch App
    </Button>
  )
}
