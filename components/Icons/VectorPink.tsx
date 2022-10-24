import { Svg } from '@nsfw-app/ui'
import { SvgIconProps } from '@nsfw-app/ui/dist/components/Icon'
import React from 'react'

export const VectorPink: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='258'
      height='398'
      viewBox='0 0 258 398'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      css={css}
    >
      <rect
        y='398'
        width='398'
        height='258'
        transform='rotate(-90 0 398)'
        fill='url(#patternPink)'
      />
      <defs>
        <pattern
          id='patternPink'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_800_4143'
            transform='translate(0 -0.094449) scale(0.000250063 0.000385755)'
          />
        </pattern>
        <image
          id='image0_800_4143'
          width='3999'
          height='3082'
        />
      </defs>
    </Svg>
  )
}