import { Svg } from '@nsfw-app/ui'
import { SvgIconProps } from '@nsfw-app/ui/dist/components/Icon'

export const BlopOrange: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='118'
      height='139'
      viewBox='0 0 118 139'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      css={css}
    >
      <rect width='118' height='139' fill='url(#patternBlopOrange)' />
      <defs>
        <pattern
          id='patternBlopOrange'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_779_4128'
            transform='translate(-0.264226) scale(0.000382208 0.000324465)'
          />
        </pattern>
        <image
          id='image0_779_4128'
          width='3999'
          height='3082'
        />
      </defs>
    </Svg>
  )
}