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
    window.location = url
}

function logoutSuccess(url) {
    window.location = url
}

function check() {
    if (window.localStorage.getItem('username') === null && window.localStorage.getItem('password') === null) {
        console.log('true')
        return true     
    } else {
        console.log('false')
        return false
    }
}