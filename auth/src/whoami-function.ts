import { User } from './entity.interface'

const whoami = (user: User): string => {
  if (user.session !== true) throw new Error('There is currently no active session.')
  return `${user.userName} session is currently active.`
}

export { whoami }
