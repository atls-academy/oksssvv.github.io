import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'primary' | 'ghost'

export type ButtonSize =
  | 'normalSizeNormalPadding'
  | 'bigSizeNormalPadding'
  | 'smallSize'
  | 'smallSizeSmallPadding'
  | 'smallSizeBigPadding'
  | 'normalSizeSmallPadding'
  | 'SmallSizeNormalPadding'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  gap?: number
  icon?: any
  containerWidth?: number
  containerHeight?: number
  containerColor?: string
  containerRadius?: number
  pressed?: boolean
}
