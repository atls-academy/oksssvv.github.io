/* eslint no-console: 0 */

import { User } from './interface'

const logout = (user0: User): string => {
  if (user0.session !== true) throw new Error('There is currently no active session.')
  user0.session = false
  console.log(`You have successfully logout of ${user0.userName} session.`)
  return `You have successfully logout of ${user0.userName} session.`
}

export { logout }
