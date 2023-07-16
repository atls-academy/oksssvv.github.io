import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputSize = 'standard' | 'normal'
export type InputVariant = 'primary' | 'ghost'

export interface InputProps extends BaseInputProps {
  size?: InputSize
  color?: InputVariant
  textarea?: boolean
  textAlign?: string
  gap?: number
  attachmentIcon?: object
}
