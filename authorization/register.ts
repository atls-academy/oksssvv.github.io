/* eslint no-console: 0 */
/* eslint-disable no-param-reassign */

import { User } from './interface'

const register = (user: User, cred: User[], name: string, pass: string): string => {
  if (user.session === true) throw new Error('There is already an active session at the moment.')
  if (name.length < 5) throw new Error('Name must be at least 5 characters.')
  if (pass.length < 6) throw new Error('Password must be at least 6.')
  user.userName = name
  user.password = pass
  user.session = true
  cred.push(user)
  console.log(`Registration of user ${name} was successful.`)
  return `Registration of user ${name} was successful.`
}

export { register }
