import { user }        from './index'
import { credentials } from './index'

/* eslint no-console: 0 */

const register = (name: string, pass: string): string => {
  if (user.session === true) throw new Error('There is already an active session at the moment.')
  if (name.length < 5) throw new Error('Name must be at least 5 characters.')
  if (pass.length < 6) throw new Error('Password must be at least 6.')
  user.userName = name
  user.password = pass
  user.session = true
  credentials.push(user)
  console.log(`Registration of user ${name} was successful.`)
  return `Registration of user ${name} was successful.`
}

const login = (name: string, pass: string): string => {
  if (user.session === true) throw new Error('There is already an active session at the moment.')
  user.userName = name
  user.password = pass
  user.session = true
  credentials.push(user)
  console.log(`You have successfully login as ${name}.`)
  return `You have successfully login as ${name}.`
}

const whoami = (): string => {
  if (user.session !== true) throw new Error('There is currently no active session.')
  console.log(`${user.userName} session is currently active.`)
  return `${user.userName} session is currently active.`
}

const logout = (): string => {
  if (user.session !== true) throw new Error('There is currently no active session.')
  user.session = false
  console.log(`You have successfully logout of ${user.userName} session.`)
  return `You have successfully logout of ${user.userName} session.`
}

export { register, login, whoami, logout }
