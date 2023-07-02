import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const EnvelopeIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 12 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.75 8.66675L0.75 5.25938L5.40744 7.76711L5.4075 7.76714C5.5896 7.86517 5.79318 7.91649 6 7.91649C6.20682 7.91649 6.4104 7.86517 6.5925 7.76714L6.59256 7.76711L11.25 5.25938L11.25 8.66675C11.25 8.99827 11.1183 9.31621 10.8839 9.55063C10.6495 9.78505 10.3315 9.91675 10 9.91675L2 9.91675C1.66848 9.91675 1.35054 9.78505 1.11612 9.55063C0.881696 9.31621 0.75 8.99827 0.75 8.66675ZM1.11612 1.78286C1.35054 1.54844 1.66848 1.41675 2 1.41675L10 1.41675C10.3315 1.41675 10.6495 1.54844 10.8839 1.78286L11.3981 1.2686L10.8839 1.78286C11.0624 1.96133 11.1813 2.18821 11.2279 2.43263L6.00005 5.24695L0.772276 2.43179C0.818994 2.18769 0.937854 1.96113 1.11612 1.78286Z'
        fill='rgba(58, 55, 93, 1)'
        stroke='rgba(58, 55, 93, 1)'
        strokeWidth={1.5}
      />
    </svg>
  )
}
