import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    username: '',
    password: ''
  }),
  actions: {
    login(username, password) {
      this.isLoggedIn = true
      this.username = username
      this.password = password
    },
    logout() {
      this.isLoggedIn = false
      this.username = ''
      this.password = ''
      localStorage.removeItem('user')
    }
  }
})
