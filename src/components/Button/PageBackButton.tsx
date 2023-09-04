import { AntDesign } from "@expo/vector-icons"
import { Box, Icon, Pressable } from "native-base"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import {
  RootStackParamList,
  StackNavigation,
} from "@/routing/RootStackParamList"

export type PageBackButtonPropsType = {
  defaultNavigationPage?: keyof RootStackParamList
}

export const PageBackButton: React.FC<PageBackButtonPropsType> = (props) => {
  const navigation = useNavigation<StackNavigation>()

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
    return
  }

  return (
    <Pressable onPress={handlePress}>
      <Box
        h={8}
        w={8}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={<AntDesign name="arrowleft" />} size="5" />
      </Box>
    </Pressable>
  )
}
