/* eslint-disable no-param-reassign */

import { User } from './user.interface'

const login = (user: User, cred: User[], name: string, pass: string): string => {
  if (user.session === true) throw new Error('There is already an active session at the moment.')
  user.userName = name
  user.password = pass
  user.session = true
  cred.push(user)
  return `You have successfully login as ${name}.`
}

export { login }
