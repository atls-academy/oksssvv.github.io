import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const SmallPlusIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 14 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.00012 7.5H13.0001M7.00012 1.5V13.5'
        stroke='black'
        strokeWidth={1.75}
        strokeLinecap='round'
      />
    </svg>
  )
}
