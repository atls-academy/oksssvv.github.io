interface User {
  username: string | undefined
  password: string | undefined
  session?: boolean
}

const user: User = {
  username: undefined,
  password: undefined,
}

const error = {
  1: 'Error. Name must be at least 5 characters.',
  2: 'Error. Password must be at least 6.',
  3: 'Error. User is not found.',
  4: 'Error. There is currently no active session.',
  5: 'Error. There is already an active session at the moment.',
}

const register = (name: string, pass: string): string => {
  if (user.session !== true) {
    if (name.length >= 5) {
      user.username = name
    } else throw error[1]
    if (pass.length >= 6) {
      user.password = pass
    } else throw error[2]
  } else throw error[5]
  return `Registration of user ${name} was successful`
}

const login = (name: string, pass: string): string => {
  if (user.session !== true) {
    if (name === user.username && pass === user.password) {
      user.session = true
    } else throw error[3]
  } else throw error[5]
  return `You have successfully login as ${name}`
}

const whoami = (): string => {
  if (user.session === undefined || user.session === false) throw error[4]
  return `${user.username} session is currently active`
}

const logout = (): string => {
  if (user.session === true) {
    user.session = false
  } else throw error[4]
  return `You have successfully logout of ${user.username} session`
}

//  test

register('Admin', '101010')
login('Admin', '101010')
whoami()
logout()
