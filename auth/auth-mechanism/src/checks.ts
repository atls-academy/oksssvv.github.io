import { user }        from './index'
import { credentials } from './index'
import { login }       from './login-function'
import { logout }      from './logout-function'
import { register }    from './register-function'
import { whoami }      from './whoami-function'

register(user, credentials, 'Admin', '101010')
login(user, credentials, 'Admin', '101010')
whoami(user)
logout(user)
