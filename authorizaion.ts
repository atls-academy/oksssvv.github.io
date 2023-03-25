/* eslint no-console: 0 */
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
    console.log(`Registration of user ${name} was successful`)
    return `Registration of user ${name} was successful`
  } catch (Error) {
    console.log(`Registration failed. ${Error}`)
    return `Registration failed. ${Error}`
  }
}

const login = (name: string, pass: string): string => {
  try {
    if (user.session === true) throw new Error('There is already an active session at the moment.')
    if (user.username !== name && user.password !== pass) throw new Error(`User not registered`)
    user.session = true
    console.log(`You have successfully login as ${name}`)
    return `You have successfully login as ${name}`
  } catch (Error) {
    console.log(`Login failed. ${Error}`)
    return `Login failed. ${Error}`
  }
}

const whoami = (): string => {
  try {
    if (user.session !== true) throw new Error('There is currently no active session.')
    console.log(`${user.username} session is currently active`)
    return `${user.username} session is currently active`
  } catch (Error) {
    console.log(`Unable to determine user. ${Error}`)
    return `Unable to determine user. ${Error}`
  }
}

const logout = (): string => {
  try {
    if (user.session !== true) throw new Error('There is currently no active session.')
    else {
      user.session = false
    }
    console.log(`You have successfully logout of ${user.username} session`)
    return `You have successfully logout of ${user.username} session`
  } catch (Error) {
    console.log(`Failed to logout. ${Error}`)
    return `Failed to logout. ${Error}`
  }
}

// test
register('Admin', '101010')
login('Admin', '101010')
whoami()
logout()
