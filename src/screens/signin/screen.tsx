import { AntDesign } from "@expo/vector-icons"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
//import { makeRedirectUri } from "expo-auth-session"
import * as Google from "expo-auth-session/providers/google"
import Constants from "expo-constants"
import {
  View,
  Button,
  HStack,
  VStack,
  Image,
  Modal,
  Icon,
  Text,
} from "native-base"
import React, { useEffect, useState } from "react"

import { useAuth } from "../../components/Auth"
import { MainHeader } from "../../components/Label"
import { ViewContainer } from "../../components/layout"
import { API_URL, GOOGLE_USER_INFO_API_URL } from "../../constants"
import { GoogleUser } from "../../libs/APIFetch"
import { RootStackParamList } from "../../routing"

const favoriteImage = require("../../../assets/signin/favorites.png")
const shoppingListImage = require("../../../assets/signin/shopping-list.png")

export const SigninScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Signin">>()
  const { signin, signout } = useAuth()

  const googleAuthentication = Constants?.manifest?.extra?.googleAuthentication
  const [, response, promptAsync] = Google.useAuthRequest({
    androidClientId: googleAuthentication.androidClientId,
    iosClientId: googleAuthentication.iosClientId,
    expoClientId: googleAuthentication.expoClientId,
  })
  const [showModal, setShowModal] = useState(false)
  const navigation = useNavigation<any>()

  useEffect(() => {
    const handleSignInWithGoogle = async () => {
      if (
        response?.type === "success" &&
        response.authentication?.accessToken
      ) {
        const googleUser = await getGoogleUserInfo(
          response.authentication?.accessToken
        )
        if (googleUser?.id) {
          await tryLogin(
            googleUser.id,
            googleUser.name,
            googleUser.email,
            "google"
          )
        }
      } else {
        signout()
      }
    }
    handleSignInWithGoogle()
  }, [response])

  const closeModal = () => setShowModal(false)

  /**
   * ユーザ情報取得
   */
  const getGoogleUserInfo = async (accessToken: string) => {
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

  /**
   * ログイン
   */
  const tryLogin = async (
    service_user_id: string,
    display_name: string,
    email: string,
    service_name: string
  ) => {
    try {
      const response = await fetch(
        `${API_URL}/login?service_user_id=${service_user_id}`
      )
      const result = await response.json()
      if (result?.message === "success" && result?.data?.token) {
        // ログイン成功
        signin(result?.data?.token)
      } else {
        // ログインできなければ新規登録
        const googleUser: GoogleUser = {
          display_name,
          email,
          service_name,
          service_user_id,
        }
        navigation.navigate("Signup", { googleUser })
      }
    } catch (error) {
      console.log("tryLogin error=" + JSON.stringify(error))
      setShowModal(true)
    }
  }

  const isFavoraitePage = route.params.sourceScreen === "Favorite"
  return (
    <ViewContainer>
      <MainHeader title={isFavoraitePage ? "お気に入り" : "買い物リスト"} />
      <VStack flex={1} alignItems="center">
        <Image
          source={isFavoraitePage ? favoriteImage : shoppingListImage}
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
            <HStack>
              <Icon as={<AntDesign name="google" />} size="5" color="white" />
              <Text color="white">Googleログイン</Text>
            </HStack>
          </Button>
          <View m="2"></View>
          <Button backgroundColor="black" disabled>
            <HStack>
              <Icon as={<AntDesign name="apple1" />} size="5" color="white" />
              <Text color="white">Appleログイン</Text>
            </HStack>
          </Button>
        </HStack>
      </VStack>

      {/* エラー表示 */}
      <Modal isOpen={showModal} onClose={closeModal}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>ログインに失敗しました</Text>
          <Button onPress={closeModal}>
            <Text>閉じる</Text>
          </Button>
        </View>
      </Modal>
    </ViewContainer>
  )
}
