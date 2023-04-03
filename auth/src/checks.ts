import { user }        from './index'
import { credentials } from './index'
import { login }       from './login'
import { logout }      from './logout'
import { register }    from './register'
import { whoami }      from './whoami'

register(user, credentials, 'Admin', '101010')
login(user, credentials, 'Admin', '101010')
whoami(user)
logout(user)
