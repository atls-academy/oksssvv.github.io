/* eslint no-console: 0 */

import { User } from './interface'

const whoami = (user0: User): string => {
  if (user0.session !== true) throw new Error('There is currently no active session.')
  console.log(`${user0.userName} session is currently active.`)
  return `${user0.userName} session is currently active.`
}

export { whoami }
