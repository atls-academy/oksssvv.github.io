import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputSize = 'standard' | 'normal'
export type InputVariant = 'ordinary'

export interface InputProps extends BaseInputProps {
  addon?: any
  size?: InputSize
  variant?: InputVariant
  textarea?: boolean
  gap?: number
  attachmentIcon?: object
  filled?: boolean | undefined | string
}
