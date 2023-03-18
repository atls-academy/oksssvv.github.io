type T = [string[],string[]];
type K = string[];

const data = <T> [['0','0'],['0','0']];
const session = <K> []

const register = (name: string, pass: string, data: T, session: K): T | string =>{
  if(session.length != 0){
    return 'Unable to register during an active session'
  }
  else if(name.length<5 || pass.length<6){
    return 'Error, username must be at least 5 characters, password at least 6 characters'
  }
  else if(data[0][0]=='0'){
    return data[0][0] = name,data[0][1] = pass, `Registration of user ${name} was successful!`
  }
  else if(data[1][0]=='0'){
    return data[1][0] = name,data[1][1] = pass, `Registration of user ${name} was successful!`
  }
  else{
    return 'Error, maximum number of users exceeded'
  }}

const login = (name: string, pass: string, data: T, session: K): string =>{
  if(data[0][0]=='0' && data[1][0]=='0'){
    return 'No registered users'
  }
  else if(session.length != 0){
    return 'Unable to login during an active session'
  }
  else if(data[0][0] == name && data[0][1] == pass){
    return session.push(name,pass), `Welcome to the system,${name}!`
  }
  else if(data[1][0] == name && data[1][1] == pass){
    return session.push(name,pass), `Welcome to the system,${name}!`
  }
  else{
    return 'User - not found'
  }}

const whoami = (session: K): string =>{
  if(session.length != 0){
    return `${session[0]} session is active`
  }
  else{
    return 'Error, no active session'
  }}

const logout = (session: K):number | string =>{
  if(session.length != 0){
    return session.length = 0
  }
  else{
    return 'Error, no active session'
  }}