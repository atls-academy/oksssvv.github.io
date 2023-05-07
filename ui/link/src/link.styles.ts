import { styleFn } from 'styled-system'

export const appearanceLinkStyles: styleFn = ({ theme }) => ({
  color: theme.colors.text.white,
})

export const shapeLinkStyles: styleFn = ({ theme }) => ({
  fontSize: theme.fontSizes.regular,
  fontFamily: theme.fonts.primary,
})
