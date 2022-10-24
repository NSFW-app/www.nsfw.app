import { Svg } from '@nsfw-app/ui'
import { SvgIconProps } from '@nsfw-app/ui/dist/components/Icon'
import React from 'react'

export const CheckIcon: React.FC<SvgIconProps> = ({ css }) => {
  return (
    <Svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      css={css}
    >
      <mask id='path-1-inside-1_815_4117' fill='white'>
        <path d='M18.6228 6.51616C18.9813 6.37134 19.3918 6.54393 19.5112 6.91163C20.187 8.99282 20.1633 11.2455 19.4322 13.3216C18.6234 15.6185 17.0042 17.5412 14.8786 18.7292C12.7529 19.9172 10.2669 20.2888 7.88675 19.7742C5.50665 19.2596 3.3961 17.8942 1.95106 15.9342C0.50603 13.9742 -0.174179 11.5543 0.0380527 9.12845C0.250285 6.70261 1.34037 4.43758 3.1038 2.75828C4.86723 1.07899 7.18281 0.10085 9.61612 0.00737102C11.8155 -0.0771232 13.9745 0.566403 15.7628 1.82744C16.0787 2.05024 16.1222 2.49342 15.8779 2.79301C15.6335 3.09261 15.194 3.13475 14.8756 2.91557C13.3536 1.86807 11.5285 1.33494 9.66986 1.40634C7.57722 1.48673 5.58582 2.32793 4.06927 3.77212C2.55272 5.21632 1.61524 7.16425 1.43272 9.25046C1.25021 11.3367 1.83519 13.4178 3.07791 15.1034C4.32064 16.789 6.13572 17.9632 8.18261 18.4058C10.2295 18.8483 12.3675 18.5288 14.1956 17.5071C16.0237 16.4855 17.4161 14.8319 18.1117 12.8566C18.7295 11.1022 18.7599 9.20109 18.2093 7.43741C18.0941 7.06837 18.2644 6.66098 18.6228 6.51616Z' />
      </mask>
      <path
        d='M18.6228 6.51616C18.9813 6.37134 19.3918 6.54393 19.5112 6.91163C20.187 8.99282 20.1633 11.2455 19.4322 13.3216C18.6234 15.6185 17.0042 17.5412 14.8786 18.7292C12.7529 19.9172 10.2669 20.2888 7.88675 19.7742C5.50665 19.2596 3.3961 17.8942 1.95106 15.9342C0.50603 13.9742 -0.174179 11.5543 0.0380527 9.12845C0.250285 6.70261 1.34037 4.43758 3.1038 2.75828C4.86723 1.07899 7.18281 0.10085 9.61612 0.00737102C11.8155 -0.0771232 13.9745 0.566403 15.7628 1.82744C16.0787 2.05024 16.1222 2.49342 15.8779 2.79301C15.6335 3.09261 15.194 3.13475 14.8756 2.91557C13.3536 1.86807 11.5285 1.33494 9.66986 1.40634C7.57722 1.48673 5.58582 2.32793 4.06927 3.77212C2.55272 5.21632 1.61524 7.16425 1.43272 9.25046C1.25021 11.3367 1.83519 13.4178 3.07791 15.1034C4.32064 16.789 6.13572 17.9632 8.18261 18.4058C10.2295 18.8483 12.3675 18.5288 14.1956 17.5071C16.0237 16.4855 17.4161 14.8319 18.1117 12.8566C18.7295 11.1022 18.7599 9.20109 18.2093 7.43741C18.0941 7.06837 18.2644 6.66098 18.6228 6.51616Z'
        className='primary stroke'
        fill='#898EA2'
        stroke='#6966FF'
        strokeWidth='2.5'
        mask='url(#path-1-inside-1_815_4117)'
      />
      <path
        d='M5 9.375L8.75 13.125L18.125 3.75'
        className='primary stroke'
        stroke='#6966FF'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}