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
  | 'smallSizeSamePadding'
  | 'bigSizeBigPadding'
  | 'largeSizeNormalPadding'
  | 'bigSizeBigRadii'
  | 'bigSizeNormalRadii'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  gap?: number
  icon?: object
  widthIcon?: number
  heightIcon?: number
  backgroundIcon?: string
  radiusIcon?: string
}
