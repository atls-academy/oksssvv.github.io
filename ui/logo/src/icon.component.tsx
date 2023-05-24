import React         from 'react'
import { FC }        from 'react'

import { LogoProps } from './logo.interfaces'

const Icon: FC<LogoProps> = ({ color }) => (
  <svg
    width='100%'
    height='100%'
    viewBox='0 0 56 56'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M35.4486 8.14024C36.2736 10.2361 36.4076 12.5779 36.5418 14.9221C36.677 17.2844 36.8123 19.6492 37.6551 21.767L38.004 22.6438C39.1588 25.5457 40.7459 28.2611 42.7125 30.7L43.3067 31.4369C44.7419 33.2168 46.7474 34.515 48.7509 35.8118C50.7251 37.0897 52.6973 38.3664 54.12 40.1014C55.2927 41.4668 56 43.2344 56 45.1651C56 48.8242 53.4597 51.8971 50.0262 52.7568C49.0008 53.0163 47.9478 53.0648 46.928 52.9183C44.5955 52.6141 42.4061 51.5233 40.2144 50.4313C38.0757 49.3657 35.9349 48.2991 33.6568 47.9612L32.7138 47.8214C29.5923 47.3584 26.4182 47.3584 23.2967 47.8214L22.3536 47.9613C20.0756 48.2991 17.9348 49.3658 15.7961 50.4313C13.5374 51.5567 11.281 52.6809 8.86786 52.944C7.22556 53.1388 5.50789 52.8293 3.96516 51.9495C0.173398 49.7869 -1.12574 44.9973 1.06344 41.2516C1.17624 41.0586 1.2961 40.8722 1.42252 40.6924C2.86014 38.6477 5.04949 37.2305 7.24126 35.8118C9.24473 34.515 11.2502 33.2168 12.6855 31.4369L13.2796 30.7C15.2463 28.2611 16.8333 25.5457 17.9881 22.6437L18.337 21.767C19.1798 19.6492 19.3152 17.2844 19.4504 14.9221C19.5968 12.3625 19.7431 9.80572 20.7889 7.56893C21.1717 6.74217 21.702 5.97646 22.3682 5.31428C23.0633 4.62159 23.8735 4.07493 24.75 3.68723C25.7941 3.2229 26.8971 3.00008 27.9882 3.00001C29.0886 2.99792 30.2014 3.22235 31.254 3.69253C32.1212 4.07781 32.9233 4.61886 33.6127 5.30313C33.856 5.54396 34.0812 5.79857 34.2878 6.06489C34.7748 6.68888 35.1685 7.38743 35.4486 8.14024ZM28 38.986C27.4 38.986 26.9797 39.0107 26.5587 39.0353C26.1361 39.0601 25.7129 39.0849 25.1065 39.0849C21.611 39.0849 19.174 35.3998 20.9218 32.4516C21.1922 31.9954 21.3383 31.8101 21.5179 31.5821C21.7445 31.2946 22.0244 30.9393 22.675 29.8868C23.2274 28.9931 23.4144 28.5424 23.5829 28.136C23.7077 27.8353 23.8223 27.5588 24.0676 27.145C24.9415 25.671 26.4707 24.934 28 24.934C29.5292 24.934 31.0585 25.671 31.9323 27.145C32.1776 27.5588 32.2923 27.8353 32.4171 28.136C32.5856 28.5424 32.7726 28.9931 33.325 29.8868C33.9756 30.9393 34.2555 31.2946 34.4821 31.5821C34.6617 31.8101 34.8077 31.9954 35.0782 32.4516C36.8259 35.3998 34.389 39.0849 30.8935 39.0849C30.2871 39.0849 29.8638 39.0601 29.4413 39.0353C29.0202 39.0107 28.5999 38.986 28 38.986Z'
      fill={color}
    />
  </svg>
)

export { Icon }
