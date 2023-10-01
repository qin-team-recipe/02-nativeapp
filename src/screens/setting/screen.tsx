import { useNavigation } from "@react-navigation/native"
import { Text, VStack, HStack, Modal, View, Center, Box } from "native-base"
import React, { useState } from "react"
import { Pressable } from "react-native"

import { SettingItem } from "./components"
import { useAuth } from "../../components/Auth"
import { ActionButton } from "../../components/Button/ActionButton"
import { MainHeader, SubHeader } from "../../components/Label"
import { ViewContainer } from "../../components/layout"

export const SettingScreen: React.FC = () => {
  const { isAuthenticated, signout } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const navigation = useNavigation<any>()

  const closeModal = () => setShowModal(false)
  const handleOnPressSignout = () => {
    setShowModal(true)
  }
  const handleSignout = () => {
    signout()
    navigation.navigate("Index", { screen: "Favorite" })
  }

  return (
    <ViewContainer>
      <MainHeader title="設定" leftItem="pageback" />
      <VStack space={2}>
        <View mt={2} />
        <SubHeader title="利用規約や問い合わせ"></SubHeader>
        <SettingItem title="利用規約" icon="movepage" />
        <SettingItem title="プライバシーポリシー" icon="movepage" />
        <SettingItem title="運営会社" icon="link" />
        <SettingItem title="お問い合わせ" icon="link" />

        {isAuthenticated && (
          <>
            <View mt={2} />
            <SubHeader title="アカウント操作"></SubHeader>
            <Pressable onPress={handleOnPressSignout}>
              <SettingItem title="ログアウト" icon="logout" />
            </Pressable>

            <View mt={2} />
            <SubHeader title="取り消しができる操作"></SubHeader>
            <SettingItem title="退会する" icon="deleteaccount" />
          </>
        )}
      </VStack>

      {/* 確認ダイアログ */}
      <Modal isOpen={showModal} onClose={closeModal}>
        <Box backgroundColor="white" rounded="sm">
          <Center m={2}>
            <Text m={2}>ログアウトしますか？</Text>
            <Box w="48">
              <HStack>
                <View flex={0.5} m={2}>
                  <ActionButton
                    onPress={handleSignout}
                    theme="filled"
                    title="はい"
                  />
                </View>
                <View flex={0.5} m={2}>
                  <ActionButton
                    onPress={closeModal}
                    theme="outline"
                    title="いいえ"
                  />
                </View>
              </HStack>
            </Box>
          </Center>
        </Box>
      </Modal>
    </ViewContainer>
  )
}
