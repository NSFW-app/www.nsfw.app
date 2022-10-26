import { Svg } from '@nsfw-app/ui'
import { SvgIconProps } from '@nsfw-app/ui/dist/components/Icon'

export const BlopViolet: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <>
      <Svg
        width='282'
        height='223'
        viewBox='0 0 282 223'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        css={css}
      >
        <rect width='282' height='223' fill='url(#patternBlopViolet)' />
        <defs>
          <pattern
            id='patternBlopViolet'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              xlinkHref='#image0_779_4123'
              transform='translate(-0.371925 -0.390135) scale(0.000436071 0.000551444)'
            />
          </pattern>
          <image
            id='image0_779_4123'
            width='3999'
            height='3082'
          />
        </defs>
      </Svg>
    </>
  )
}