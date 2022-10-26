import { Svg } from '@nsfw-app/ui'
import { SvgIconProps } from '@nsfw-app/ui/dist/components/Icon'

export const BlopPurple: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='194'
      height='151'
      viewBox='0 0 194 151'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      css={css}
    >
      <rect width='194' height='151' fill='url(#patternBlopPurple)' />
      <defs>
        <pattern
          id='patternBlopPurple'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_731_4183'
            transform='translate(-0.00496816) scale(0.000252547 0.000324465)'
          />
        </pattern>
        <image
          id='image0_731_4183'
          width='3999'
          height='3082'
        />
      </defs>
    </Svg>
  )
}