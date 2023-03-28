/* eslint no-console: 0 */

import { User } from './interface'

const whoami = (user: User): string => {
  if (user.session !== true) throw new Error('There is currently no active session.')
  console.log(`${user.userName} session is currently active.`)
  return `${user.userName} session is currently active.`
}

export { whoami }
