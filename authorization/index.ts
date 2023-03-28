import { User }     from './interface'
import { register } from './functions'
import { login }    from './functions'
import { whoami }   from './functions'
import { logout }   from './functions'

const user: User = { session: false }

const credentials: User[] = []

// test
register('Admin', '101010')
login('Admin1', '101010')
whoami()
logout()

export { user, credentials }
