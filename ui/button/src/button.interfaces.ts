export type ButtonVariant = '*' | '*' | '*'

export type ButtonShape =
  | 'iconPaddingRounding'
  | 'iconSmallPaddingRounding'
  | 'formPaddingRounding'
  | 'formBorder'
export type ButtonAppearance =
  | 'iconBackgroundGhost'
  | 'iconSmallPaddingRounding'
  | 'formBackgroundGhost'
  | 'formBorder'

export interface ButtonProps {
  variant?: ButtonVariant
  shape?: ButtonShape
  appearance?: ButtonAppearance
  active?: boolean
  ref?: any
  iconSvg?: object
  valueRadius?: object
  valueWidth?: object
  valueHeight?: object
}
