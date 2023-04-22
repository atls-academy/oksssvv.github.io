import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

type ButtonColors = 'transparent' | 'border'

type ButtonSizes = 'normal' | 'big' | 'wide' | 'medium'

export interface ButtonProps extends BaseButtonProps {
  colors?: ButtonColors
  size?: ButtonSizes
}
