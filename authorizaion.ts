interface User {
  username?: string
  password?: string
  session: boolean
}

const user: User = { session: false }

const credentials: [string[]?] = []

const register = (name: string, pass: string): string => {
  try {
    if (user.session === true) throw new Error('There is already an active session at the moment.')
    if (name.length < 5) throw new Error('Name must be at least 5 characters.')
    if (pass.length < 6) throw new Error('Password must be at least 6.')
    user.username = name
    user.password = pass
    credentials.push([name, pass])
    return `Registration of user ${name} was successful`
  } catch (Error) {
    return `Registration failed. ${Error}`
  }
}

const login = (name: string, pass: string): string => {
  try {
    if (user.session === true) throw new Error('There is already an active session at the moment.')
    if (user.username !== name && user.password !== pass)
      throw new Error(`User with login ${name} not found`)
    user.session = true
    return `You have successfully login as ${name}`
  } catch (Error) {
    return `Login failed. ${Error}`
  }
}

const whoami = (): string => {
  try {
    if (user.session !== true) throw new Error('There is currently no active session.')
    return `${user.username} session is currently active`
  } catch (Error) {
    return `Unable to determine user. ${Error}`
  }
}

const logout = (): string => {
  try {
    if (user.session !== true) throw new Error('There is currently no active session.')
    else {
      user.session = false
    }
    return `You have successfully logout of ${user.username} session`
  } catch (Error) {
    return `Failed to logout. ${Error}`
  }
}

// test
register('Admin', '101010')
login('Admin', '101010')
whoami()
logout()
