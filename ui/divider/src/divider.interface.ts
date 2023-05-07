import { BoxProps } from '@ui/layout'

export interface DividerProps extends Omit<BoxProps, 'height' | 'width'> {
  weight?: number | string | number[] | string[]
}
