import { LayoutProps } from 'styled-system'

export interface ImageProps extends LayoutProps {
  src: string
  display?: string[]
}