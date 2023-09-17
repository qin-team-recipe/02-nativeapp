import { useNavigation } from "@react-navigation/native"
import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Pressable,
  Center,
  Spinner,
} from "native-base"
import { useState } from "react"
import { Dimensions, StyleSheet } from "react-native"

import { Chef } from "../../libs/APIFetch"

export type ChefCardPropsType = {
  imgSize: {
    width: number
    height: number
  }
  image: string
  chef: Chef
}

export const ChefCard: React.FC<ChefCardPropsType> = (props) => {
  const [isPressed, setIsPressed] = useState(false)
  const navigation = useNavigation<any>()

  // カードのテキスト幅取得(画面padding * 2 + space + 画像幅)
  const descriptionWidth =
    Dimensions.get("window").width - (16 * 2 + 16 + props.imgSize.width)

  const handlePress = () => {
    setIsPressed(true)
    setTimeout(() => {
      setIsPressed(false)
      navigation.navigate("Chefs", { chef: props.chef })
    }, 200)
  }

  return (
    <Pressable onPress={handlePress}>
      <HStack space={4}>
        <Box style={styles.container}>
          <Image
            source={{
              // TODO:uriに変数が使えないので暫定対応
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt={`${props.chef.display_name}の画像`}
            resizeMode="contain"
            rounded="2xl"
            w={props.imgSize.width}
            h={props.imgSize.height}
          />
          {isPressed && (
            <Center style={styles.highLight}>
              <Spinner size="lg">Loading</Spinner>
            </Center>
          )}
        </Box>
        <VStack justifyContent="space-between" w="auto">
          <VStack>
            <Text
              mb={1}
              numberOfLines={1}
              fontSize="lg"
              fontWeight="bold"
            >{`${props.chef.display_name}`}</Text>
            <Text numberOfLines={3} color="gray.400" maxW={descriptionWidth}>
              {props.chef.description}
            </Text>
          </VStack>
          <HStack>
            {/*
            TODO:uriに変数が使えないので暫定対応
            <Image source={{ uri: icon }} />
          */}
            <Text>{props.chef.recipes_count}&nbsp;レシピ</Text>
          </HStack>
        </VStack>
      </HStack>
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
