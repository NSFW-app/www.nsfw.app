import { Svg } from '@nsfw-app/ui'
import { SvgIconProps } from '@nsfw-app/ui/dist/components/Icon'

export const BlopGreen: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='81'
      height='93'
      viewBox='0 0 81 93'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      css={css}
    >
      <rect width='81' height='93' fill='url(#patternBlopGreen)' />
      <defs>
        <pattern
          id='patternBlopGreen'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_779_4130'
            transform='translate(-0.796764 -0.314948) scale(0.000649351 0.000564972)'
          />
        </pattern>
        <image
          id='image0_779_4130'
          width='3999'
          height='3082'
        />
      </defs>
    </Svg>
  )
}