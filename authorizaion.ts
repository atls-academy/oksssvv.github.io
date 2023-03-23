interface User {
  username?: string
  password?: string
  session: boolean
}

const user: User = {
  session: false,
}

const error = {
  1: 'Error. Name must be at least 5 characters.',
  2: 'Error. Password must be at least 6.',
  3: 'Error. User is not found.',
  4: 'Error. There is currently no active session.',
  5: 'Error. There is already an active session at the moment.',
}

const register = (name: string, pass: string): string => {
  try {
    if (user.session !== true) {
      if (name.length >= 5) {
        user.username = name
      } else throw error[1]
      if (pass.length >= 6) {
        user.password = pass
      } else throw error[2]
    } else throw error[5]
    return `Registration of user ${name} was successful`
  } catch (Error) {
    return 'Registration failed.'
  }
}

const login = (name: string, pass: string): string => {
  try {
    if (user.session !== true) {
      if (name === user.username && pass === user.password) {
        user.session = true
      } else throw error[3]
    } else throw error[5]
    return `You have successfully login as ${name}`
  } catch (Error) {
    return 'Login failed.'
  }
}

const whoami = (): string => {
  try {
    if (user.session === false) throw error[4]
    return `${user.username} session is currently active`
  } catch (Error) {
    return 'Login to the user session and retry the command.'
  }
}

const logout = (): string => {
  try {
    if (user.session === true) {
      user.session = false
    } else throw error[4]
    return `You have successfully logout of ${user.username} session`
  } catch (Error) {
    return 'Logout of the session is possible only if the session is login.'
  }
}

//  test

register('Admin', '101010')
login('Admin', '101010')
whoami()
logout()
