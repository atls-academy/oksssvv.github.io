/* eslint-disable no-param-reassign */

import { User } from './interface'

const logout = (user: User): string => {
  if (user.session !== true) throw new Error('There is currently no active session.')
  delete user.userName
  delete user.password
  user.session = false
  return 'You have successfully logout of session'
}

export { logout }
