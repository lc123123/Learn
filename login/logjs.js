function login(username, password) {
    if (username === '123' && password === '123') {
        return true
    } else {
        return false
    }
}

function logout() {
    return true
}

function loginSuccess(url) {
    localStorage.setItem('username',this.username)
    localStorage.setItem('password',this.password)
    window.location = url
}

function logoutSuccess(url) {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    window.location = url
}

function check() {
    if (window.localStorage.key('username') === null && window.localStorage.key('password') === null) {
        console.log('true')
        return true     
    } else {
        console.log('false')
        return false
    }
}