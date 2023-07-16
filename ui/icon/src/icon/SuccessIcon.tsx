import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const SuccessIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 49 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x={0.5}
        y={48}
        width={48}
        height={48}
        rx={16}
        transform='rotate(-90 0.5 48)'
        fill='#4D3CF2'
      />
      <path
        d='M17.5 23L22.5 28L31.5 19'
        stroke='white'
        strokeWidth={1.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
