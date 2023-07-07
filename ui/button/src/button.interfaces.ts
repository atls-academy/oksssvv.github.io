import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'primary' | 'ghost'

export type ButtonSize =
  | 'normalSizeNormalPadding'
  | 'bigSizeNormalPadding'
  | 'smallSize'
  | 'smallSizeSmallPadding'
  | 'smallSizeBigPadding'
  | 'normalSizeSmallPaddingStyles'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  gap?: number | string
  icon?: any
  containerWidth?: number
  containerHeight?: number
  containerColor?: string
  containerRadius?: number
  pressed?: boolean
}
