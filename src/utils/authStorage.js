import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`)

    return token ? token : null
  }

  setAccessToken(accessToken) {
    return AsyncStorage.setItem(`${this.namespace}:token`, accessToken)
  }

  removeAccessToken() {
    return AsyncStorage.removeItem(`${this.namespace}:token`)
  }
}

export default AuthStorage
