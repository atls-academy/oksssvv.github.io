/* eslint no-console: 0 */
/* eslint-disable no-param-reassign */

import { User } from './interface'

const logout = (user: User): string => {
  if (user.session !== true) throw new Error('There is currently no active session.')
  user.session = false
  console.log(`You have successfully logout of ${user.userName} session.`)
  return `You have successfully logout of ${user.userName} session.`
}

export { logout }
