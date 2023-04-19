import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonSize = 'default' | 'iconNormal' | 'iconWide' | 'formBig' | 'formNormal'

export type ButtonVariant = 'default' | 'iconTransparent' | 'iconBorder'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
}
