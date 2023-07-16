import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant = 'primary' | 'ghost'

export type ButtonSize =
  | 'normalSizeNormalPadding'
  | 'bigSizeNormalPadding'
  | 'smallSize'
  | 'smallSizeSmallPadding'
  | 'smallSizeBigPadding'
  | 'normalSizeSmallPadding'
  | 'smallSizeNormalPadding'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  gap?: number
  icon?: any
  valueWidthIcon?: number
  valueHeightIcon?: number
  valueBackgroundIcon?: string
  valueRadiusIcon?: string
}
