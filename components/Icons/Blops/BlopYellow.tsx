import { Svg } from '@nsfw-app/ui'
import { SvgIconProps } from '@nsfw-app/ui/dist/components/Icon'

export const BlopYellow: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='198'
      height='159'
      viewBox='0 0 198 109'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      css={css}
    >
      <rect width='198' height='109' fill='url(#patternBlopyellow)' />
      <defs>
        <pattern
          id='patternBlopyellow'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_730_4179'
            transform='translate(0 -0.199987) scale(0.000250063 0.000454242)'
          />
        </pattern>
        <image
          id='image0_730_4179'
          width='3999'
          height='3082'
        />
      </defs>
    </Svg>
  )
}