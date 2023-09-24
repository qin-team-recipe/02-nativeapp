import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { HStack, Icon, Text, View } from "native-base"
import React from "react"
import { TouchableOpacity } from "react-native"

import { PageBackButton } from "../Button"

export type MainHeaderProps = {
  title: string
  leftItem?: "setting" | "pageback"
  rightItem?: "mypage"
}

export const MainHeader: React.FC<MainHeaderProps> = (props) => {
  const navigation = useNavigation<any>()

  // 左アイテム
  let leftItem: JSX.Element | undefined = undefined
  if (props.leftItem === "setting") {
    leftItem = (
      <TouchableOpacity onPress={() => onPressSetting}>
        <Icon as={<Ionicons name="menu" />} size="5" ml="2" color="black" />
      </TouchableOpacity>
    )
  } else if (props.leftItem === "pageback") {
    leftItem = <PageBackButton />
  }
  const onPressSetting = () => {
    console.log("setting")
    //navigation.navigate("Setting", {})
  }

  // 右アイテム
  let rightItem: JSX.Element | undefined = undefined
  if (props.rightItem === "mypage") {
    rightItem = (
      <TouchableOpacity onPress={() => onPressMyPage}>
        <Icon
          as={<FontAwesome name="user-circle-o" />}
          size="5"
          ml="2"
          color="black"
        />
      </TouchableOpacity>
    )
  }
  const onPressMyPage = () => {
    console.log("mypage")
    //navigation.navigate("MyPage", {})
  }

  return (
    <HStack
      justifyContent="space-between"
      backgroundColor="white"
      alignItems="center"
      h={12}
      mb={2}
      w="full"
      shadow="2"
    >
      <View flex={0.2} justifyContent="flex-start" alignItems="center">
        {leftItem}
      </View>
      <View flex={0.6} justifyContent="center" alignItems="center">
        <Text fontWeight="bold" fontSize="xl">
          {props.title}
        </Text>
      </View>
      <View flex={0.2} justifyContent="flex-end" alignItems="center">
        {rightItem}
      </View>
    </HStack>
  )
}
