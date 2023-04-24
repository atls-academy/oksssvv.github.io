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
}
