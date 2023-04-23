import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'transparentBackground' | 'transparentBorder'

export type ButtonSize =
  | 'mediumPaddingBigHeight'
  | 'bigPaddingMediumHeight'
  | 'normalPaddingNormalHeight'
  | 'bigPaddingSmallHeight'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
  iconSvg?: object
  valueRadius?: string | object
  valueWidth?: string | object
  valueHeight?: string | object
  valueBackground?: string | object
  horizontalLocation?: 'left' | 'right'
}
