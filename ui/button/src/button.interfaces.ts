import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant =
  | 'transparentBackground'
  | 'transparentBorder'
  | 'darkPurpleBackground'
  | 'transparentLightBackground'

export type ButtonSize =
  | 'mediumPaddingBigHeight'
  | 'bigPaddingMediumHeight'
  | 'normalPaddingNormalHeight'
  | 'bigPaddingSmallHeight'
  | 'normalPaddingSmallHeight'
  | 'smallPaddingSmallHeight'
  | 'wideButtonSmallPaddingMediumHeight'
  | 'longButtonSmallPaddingMediumHeight'
  | 'longButtonNormalPaddingMediumHeight'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  gap?: number
  iconSVG?: any
  iconWidth?: number
  iconHeight?: number
  iconRadius?: string
}
