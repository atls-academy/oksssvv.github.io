import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowRightIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 8 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 1.5L7 7.50001L1 13.5'
        stroke={theme.colors[props.color || 0] || props.color || 'rgba(58, 55, 93, 1)'}
        strokeWidth={1.75}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
