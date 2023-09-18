import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import * as Google from "expo-auth-session/providers/google"
import { View, Text, Button, HStack, VStack, Image } from "native-base"
import { useEffect } from "react"

import { useAuth } from "../../components/Auth"
import {
  API_URL,
  ANDORIOD_CLIENT_ID,
  EXPO_CLIENT_ID,
  GOOGLE_USER_INFO_API_URL,
} from "../../constants"
import { RootStackParamList } from "../../routing"

const favoriteImage = require("../../../assets/signin/favorites.png")
const shoppingListImage = require("../../../assets/signin/shopping-list.png")

export const SigninScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Signin">>()
  const { signin, signout } = useAuth()
  const [, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDORIOD_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  })

  const navigation = useNavigation<any>()

  useEffect(() => {
    const handleSignInWithGoogle = async () => {
      if (
        response?.type === "success" &&
        response.authentication?.accessToken
      ) {
        const user = await getUserInfo(response.authentication?.accessToken)
        if (user?.id) {
          await tryLogin(user.id)
        }
      } else {
        signout()
      }
    }
    handleSignInWithGoogle()
  }, [response])

  const getUserInfo = async (accessToken: string) => {
    try {
      const response = await fetch(GOOGLE_USER_INFO_API_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })

      const user = await response.json()
      return user
    } catch (error) {
      console.log("getUserInfo error=" + JSON.stringify(error))
      signout()
    }
  }

  const tryLogin = async (service_user_id: string) => {
    const response = await fetch(
      `${API_URL}/login?service_user_id=${service_user_id}`
    )
    const result = await response.json()
    if (result?.message !== "success" && !result?.data?.token) {
      // ログインできなければ新規登録
      navigation.navigate("Signup", {})
      return
    }

    signin(result?.data?.token)
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <VStack flex={1} alignItems="center">
        <Image
          source={
            route.params.sourceScreen === "Favorite"
              ? favoriteImage
              : shoppingListImage
          }
          resizeMode="contain"
          alt="favorites login"
          w={200}
          h={200}
          m={10}
        />
        <Text>ログインをお願いします</Text>
        <Text fontSize="xs">こちらの機能を利用するにはログインが必要です</Text>
        <View mt={10} />
        <HStack marginTop="2">
          <Button
            backgroundColor="#0081F1"
            onPress={() => {
              promptAsync()
            }}
          >
            Googleログイン
          </Button>
          <View m="2"></View>
          <Button backgroundColor="black" disabled>
            Appleログイン
          </Button>
        </HStack>
      </VStack>
    </View>
  )
}
