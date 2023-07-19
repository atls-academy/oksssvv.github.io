type BreakpointsProp = Array<string> & {
  mobile?: string | number
  desktop?: string | number
  wide?: string | number
  superWide?: string | number
}

export const breakpoints: BreakpointsProp = ['50em', '100em', '150em', '200em']

breakpoints.mobile = breakpoints[0] // eslint-disable-line
breakpoints.desktop = breakpoints[1] // eslint-disable-line
breakpoints.wide = breakpoints[2] // eslint-disable-line
breakpoints.superWide = breakpoints[2] // eslint-disable-line
