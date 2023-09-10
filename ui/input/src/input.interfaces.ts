import { InputProps as BaseInputProps } from '@atls-ui-parts/input'

export type InputSize = 'standard' | 'normal'
export type InputVariant = 'ordinary'

export interface InputProps extends BaseInputProps {
  addon?: JSX.Element
  size?: InputSize
  variant?: InputVariant
  textarea?: boolean
  gap?: number
  attachmentIcon?: JSX.Element
  filled?: boolean | undefined | string
}
