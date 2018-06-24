import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// implement a UI

// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })
