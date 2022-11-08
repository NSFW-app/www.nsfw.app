import { Svg } from '@nsfw-app/ui'
import { SvgIconProps } from '@nsfw-app/ui/dist/components/Icon'

export const ExternalLink: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      data-testid='geist-icon'
      fill='none'
      height='1em'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      width='1em'
      css={css}
    >
      <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6'></path>
      <path d='M15 3h6v6'></path>
      <path d='M10 14L21 3'></path>
    </Svg>
  )
}
