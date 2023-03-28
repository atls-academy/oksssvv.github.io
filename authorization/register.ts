/* eslint no-console: 0 */

import { User } from './interface'

const register = (user0: User, cred: User[], name: string, pass: string): string => {
  if (user0.session === true) throw new Error('There is already an active session at the moment.')
  if (name.length < 5) throw new Error('Name must be at least 5 characters.')
  if (pass.length < 6) throw new Error('Password must be at least 6.')
  user0.userName = name
  user0.password = pass
  user0.session = true
  cred.push(user0)
  console.log(`Registration of user ${name} was successful.`)
  return `Registration of user ${name} was successful.`
}

export { register }
