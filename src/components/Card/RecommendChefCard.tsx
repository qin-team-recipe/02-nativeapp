import { useNavigation } from "@react-navigation/native"
import { Box, Center, Image, Pressable, Spinner, Text } from "native-base"
import { useState } from "react"
import { StyleSheet } from "react-native"

import { Chef } from "../../libs/APIFetch"

// import { useRecoilState } from "recoil"

// import { ModalVisibilityState } from "../../libs/dummy"

export type RecommendChefCardPropsType = {
  imgSize: {
    width: number
    height: number
  }
  image: string
  chef: Chef
}

export const RecommendChefCard: React.FC<RecommendChefCardPropsType> = (
  props
) => {
  // const handleToggleVisibleState = (): void => {
  //   const [isVisible, setIsVisible] = useRecoilState(ModalVisibilityState)
  //   setIsVisible((prevIsVisible) => !prevIsVisible)
  // }
  const [isPressed, setIsPressed] = useState(false)
  const navigation = useNavigation<any>()

  const handlePress = () => {
    setIsPressed(true)
    setTimeout(() => {
      setIsPressed(false)
      navigation.navigate("Chefs", { chef: props.chef })
    }, 200)
  }

  return (
    <Pressable /*onPress={handleToggleVisibleState}*/ onPress={handlePress}>
      <Box maxW={props.imgSize.width}>
        <Image
          source={{
            // TODO:uriに変数が使えないので暫定対応
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt={`${props.chef.display_name}の画像`}
          resizeMode="stretch"
          rounded="2xl"
          w={props.imgSize.width}
          h={props.imgSize.height}
        />
        <Text
          position="absolute"
          bottom={2}
          left={2}
          numberOfLines={2}
          fontSize="md"
          fontWeight="bold"
          color="white"
        >
          {props.chef.display_name}
        </Text>
        {isPressed && (
          <Center style={styles.highLight}>
            <Spinner size="lg">Loading</Spinner>
          </Center>
        )}
      </Box>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  highLight: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.3,
  },
})
