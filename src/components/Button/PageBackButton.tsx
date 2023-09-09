import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Box, Icon, Pressable } from "native-base"
import React from "react"

import { RootStackParamList } from "../../routing"

export type PageBackButtonPropsType = {
  defaultNavigationPage?: keyof RootStackParamList
}

export const PageBackButton: React.FC<PageBackButtonPropsType> = (props) => {
  const navigation = useNavigation<any>()

  const handlePress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
      return
    }
    if (props.defaultNavigationPage) {
      navigation.navigate(props.defaultNavigationPage, {})
      return
    }
    navigation.navigate("Index", {})
  }

  return (
    <Pressable onPress={handlePress}>
      <Box
        h={10}
        w={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        rounded="full"
        backgroundColor="white"
        opacity={0.5}
      >
        <Icon as={<AntDesign name="arrowleft" />} size="5" color="black" />
      </Box>
    </Pressable>
  )
}
