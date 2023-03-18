let userData:Array<string[]> = [
  ['Oksana','010101']
]

let activeSession:string|null = userData[2][0];

function whoami(currentSession:string|null):string{
  if(currentSession != null){
    return `User ${currentSession} is currently login`
  }
  else{
    return 'There are no authorized users in the system!'
  }
}

function login(username:string,password:string,storage:string[][]):string{
  if(storage[0][0] === username && storage[0][1] === password){
    return `Welcome to the system, ${username}!`
  }
  else{
    return 'Wrong username or password!'
  }
}

function logout(currentSession:string|null):string{
  if(currentSession != null){
    return `You are logout of the session of user ${currentSession}`
  }
  else{
    return'No active session!'
  }
}

function register(username:string,password:string,storage:string[][],currentSession:string|null):string{
  if(currentSession != null){
    return 'User registration is not possible during an active session!'
  }
  else if(username == ''){
    return 'Enter your name.'
  }
  else if(username.length<5){
    return 'Username must be at least 5 characters long.'
  }  
  else if(password == ''){
    return 'Enter password.'
  }
  else if(password.length<6){
    return 'Password must be at least 6 characters long.'
  }
  else{
    return storage.push([username,password]), `User ${username} successfully registered in the system!`
  }
}
