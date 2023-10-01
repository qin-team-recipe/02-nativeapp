import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, VStack, HStack, Input, Button, Modal } from "native-base"
import React, { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"

import { useAuth } from "../../components/Auth"
import { ActionButton } from "../../components/Button/ActionButton"
import { SubHeader, MainHeader } from "../../components/Label"
import { ViewContainer } from "../../components/layout"
import { API_URL } from "../../constants"
import { GoogleUser } from "../../libs/APIFetch"
import { RootStackParamList } from "../../routing"

export const SignupScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Signup">>()
  const [showModal, setShowModal] = useState(false)
  const { signin, signout } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()
  const navigation = useNavigation<any>()

  useEffect(() => {
    setValue("nickName", route.params?.googleUser?.display_name ?? "")
  }, [route])

  /**
   * サブミット
   */
  const onSubmit = (data: any) => {
    const newGoogleUser: GoogleUser = {
      ...route.params?.googleUser,
      display_name: data.nickName,
    }
    tryRegister(newGoogleUser)
  }

  /**
   * 新規登録
   */
  const tryRegister = async (googleUser: GoogleUser) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(googleUser),
      })
      const result = await response.json()
      if (result?.message === "success" && result?.data?.token) {
        // 登録成功
        await signin(result?.data?.token)
        navigation.navigate("Index", { screen: "Favorite" })
      } else {
        // 失敗
        setShowModal(true)
      }
    } catch (error) {
      console.log("tryRegister error=" + JSON.stringify(error))
      setShowModal(true)
    }
  }
  /**
   * キャンセル
   */
  const onCancel = () => {
    signout()
    navigation.navigate("Index", { screen: "Favorite" })
  }
  /**
   * ダイアログクローズ
   */
  const closeModal = () => setShowModal(false)

  return (
    <ViewContainer>
      <MainHeader title="新規登録" />

      <View
        flex={1}
        justifyContent="space-between"
        alignItems="center"
        w="full"
      >
        <VStack space={2} w="full">
          <SubHeader title="ニックネーム"></SubHeader>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                type="text"
                placeholder="ニックネーム"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                backgroundColor="gray.200"
                borderColor="gray.300"
                maxLength={20}
              />
            )}
            name="nickName"
          />
          {errors.nickName && <Text color="red.600">必須項目です</Text>}

          <HStack justifyContent="space-between" alignItems="center" w="full">
            <View flex={0.5} m={2}>
              <ActionButton
                onPress={handleSubmit(onSubmit)}
                theme="filled"
                title="登録"
              />
            </View>
            <View flex={0.5} m={2}>
              <ActionButton
                onPress={() => onCancel()}
                theme="outline"
                title="キャンセル"
              />
            </View>
          </HStack>
        </VStack>
      </View>

      {/* エラー表示 */}
      <Modal isOpen={showModal} onClose={closeModal}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>新規登録に失敗しました</Text>
          <Button onPress={closeModal}>
            <Text>閉じる</Text>
          </Button>
        </View>
      </Modal>
    </ViewContainer>
  )
}
