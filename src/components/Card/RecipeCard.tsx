import { useNavigation } from "@react-navigation/native"
import { Box, Image, Pressable, Text, VStack } from "native-base"
import { useState } from "react"
import { StyleSheet } from "react-native"

import { Recipe } from "../../libs/APIFetch/"
import { FavoriteCount } from "../Label"

export type RecipeCardPropsType = {
  imgSize: number
  image: string
  recipe: Recipe
}

export const RecipeCard: React.FC<RecipeCardPropsType> = (props) => {
  const [isPressed, setIsPressed] = useState(false)
  const navigation = useNavigation<any>()

  const handlePress = () => {
    setIsPressed(true)
    setTimeout(() => {
      setIsPressed(false)
      navigation.navigate("Recipes", { recipe: props.recipe })
    }, 200)
  }

  return (
    <Pressable onPress={handlePress}>
      <VStack maxW={props.imgSize}>
        <Box style={styles.container}>
          <Image
            source={{
              // TODO:uriに変数が使えないので暫定対応
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt={`${props.recipe.title}の画像`}
            resizeMode="contain"
            rounded="2xl"
            w={props.imgSize}
            h={props.imgSize}
          />
          <FavoriteCount count={props.recipe.favorites_count} />
          {isPressed && <Box style={styles.highLight} />}
        </Box>
        <VStack mt={1} px={1}>
          <Text numberOfLines={2} fontWeight="bold">
            {props.recipe.title}
          </Text>
          <Text numberOfLines={1} fontSize="xs" color="gray.400">
            {props.recipe.description}
          </Text>
        </VStack>
      </VStack>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  highLight: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.3,
  },
})
