/* eslint no-console: 0 */

import { User } from './interface'

const login = (user0: User, cred: User[], name: string, pass: string): string => {
  if (user0.session === true) throw new Error('There is already an active session at the moment.')
  user0.userName = name
  user0.password = pass
  user0.session = true
  cred.push(user0)
  console.log(`You have successfully login as ${name}.`)
  return `You have successfully login as ${name}.`
}

export { login }
