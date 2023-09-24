import AsyncStorage from "@react-native-async-storage/async-storage"

const KEY = "@AuthToken"

export const setTokenToLocalStorage = async (token: string) => {
  await AsyncStorage.setItem(KEY, token)
}

export const getTokenFromLocalStorage = async () => {
  return await AsyncStorage.getItem(KEY)
}

export const removeTokenFromLocalStorage = async () => {
  await AsyncStorage.removeItem(KEY)
}
