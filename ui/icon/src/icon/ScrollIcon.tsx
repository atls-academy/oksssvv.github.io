import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ScrollIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 12 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11 6L11 12C11 14.7614 8.76142 17 6 17C3.23858 17 1 14.7614 1 12L1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6L12 12C12 15.3137 9.31371 18 6 18C2.68629 18 0 15.3137 0 12L0 6ZM6.625 4.25C6.625 3.90482 6.34518 3.625 6 3.625C5.65482 3.625 5.375 3.90482 5.375 4.25L5.375 7.25C5.375 7.59518 5.65482 7.875 6 7.875C6.34518 7.875 6.625 7.59518 6.625 7.25L6.625 4.25Z'
        fill='#3A375D'
      />
    </svg>
  )
}
