// export interface SmoothOptions {
//   duration?: number
//   pattern?: 'in' | 'out' | 'in-and-out'
// }

export interface ConditionProps {
  match: boolean
  smooth?: boolean
  smoothOptions?: any
  children?: any
}
