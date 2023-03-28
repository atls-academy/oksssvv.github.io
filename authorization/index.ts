import { User }     from './interface'
import { login }    from './login'
import { logout }   from './logout'
import { register } from './register'
import { whoami }   from './whoami'

const user: User = { session: false }

const credentials: User[] = []

// test
register(user, credentials, 'Admin', '101010')
login(user, credentials, 'Admin', '101010')
whoami(user)
logout(user)

export { user, credentials }
