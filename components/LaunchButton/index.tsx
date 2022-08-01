import { Link, LinkProps } from 'components/Link'
import { APP_ROUTES } from 'config'

interface Props extends Partial<LinkProps> {
  onLaunch?: () => void
}
export const LaunchButton: React.FC<Props> = ({ css, onLaunch, ...props }) => {
  return (
    <Link
      button
      uppercase
      theme='primary'
      css={css}
      onClick={() => onLaunch?.()}
      href={APP_ROUTES.APP}
      {...props}
    >
      Launch App
    </Link>
  )
}
