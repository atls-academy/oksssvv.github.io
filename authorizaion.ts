interface User {
  username: string
  password: string
  session: boolean
}

const user1: User = {
  username: '',
  password: '',
  session: false,
}

const user2: User = {
  username: '',
  password: '',
  session: false,
}

const register = (username: string, password: string, us1: User, us2: User): string => {
  if (username.length >= 5 && password.length >= 6) {
    if (us1.session === false && us2.session === false) {
      if (us1.username === '') {
        return (
          (us1.username = username) && (us1.password = password),
          `Registration successful,${username}`
        )
      } else if (us2.username === '') {
        return (
          (us2.username = username) && (us2.password = password),
          `Registration successful,${username}`
        )
      } else {
        return 'Err. maximum number of users registered'
      }
    } else {
      return 'Err. now active session'
    }
  } else {
    return 'Err. Username at least 5 characters, password at least 6 characters'
  }
}

register('Admin1', '101010', user1, user2)
register('Admin2', '101010', user1, user2)
register('Admin3', '101010', user1, user2)
