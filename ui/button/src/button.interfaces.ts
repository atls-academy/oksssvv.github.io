import { ButtonProps as BaseButtonProps} from '@atls-ui-parts/button'
export type ButtonVariant = 'primary'
export type ButtonSize = 'normalSizeNormalPadding' | 'bigSizeNormalPadding'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize 
  gap?: number | string
  icon?: any
  containerWidth?: number
  containerHeight?: number
  containerColor?: string
}