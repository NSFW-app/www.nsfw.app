import { Svg } from '@nsfw-app/ui'
import { SvgIconProps } from '@nsfw-app/ui/dist/components/Icon'

export const BlopPink: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='196'
      height='127'
      viewBox='0 0 196 127'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      css={css}
    >
      <rect width='196' height='127' fill='url(#patternBlopPink)' />
      <defs>
        <pattern
          id='patternBlopPink'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_730_4181'
            transform='translate(0 -0.0947077) scale(0.000250063 0.000385923)'
          />
        </pattern>
        <image
          id='image0_730_4181'
          width='3999'
          height='3082'
        />
      </defs>
    </Svg>
  )
}