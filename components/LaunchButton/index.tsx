import { Stitches, Button } from '@nsfw-app/ui'
import { Link } from 'components/Link'
import { APP_ROUTES } from 'config'

interface Props extends Stitches.ComponentProps<typeof Button> {
  onLaunch?: () => void
}
export const LaunchButton: React.FC<Props> = ({ css, onLaunch }) => {
  return (
    <Link
      button
      theme='primary'
      css={css}
      onClick={() => onLaunch?.()}
      href={APP_ROUTES.APP}
    >
      Launch App
    </Link>
  )
}
