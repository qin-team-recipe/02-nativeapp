import { Box, Image, Text, VStack } from "native-base"

import { FavoriteCount } from "../Label"

export type RecommendRecipePropsType = {
  imgSize: number
  image: string
  title: string
  text: string
  chef: string
  good: number
  comment: number
}

export const RecipeCard: React.FC<RecommendRecipePropsType> = (props) => {
  return (
    <VStack maxW={props.imgSize}>
      <Box>
        <Image
          source={{
            // TODO:uriに変数が使えないので暫定対応
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt={`${props.title}の画像`}
          resizeMode="contain"
          rounded="2xl"
          w={props.imgSize}
          h={props.imgSize}
        />
        <FavoriteCount count={props.good} />
      </Box>
      <VStack mt={1} px={1}>
        <Text numberOfLines={2} fontWeight="bold">
          {props.title}
        </Text>
        <Text numberOfLines={1} fontSize="xs" color="gray.400">
          {props.text}
        </Text>
      </VStack>
    </VStack>
  )
}
