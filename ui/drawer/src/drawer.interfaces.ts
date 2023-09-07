import { ReactNode } from 'react'

export interface DrawerProps {
  active?: boolean
  children: ReactNode
  heightDrawer: { _: number; standard: number; ultra: number }
}
