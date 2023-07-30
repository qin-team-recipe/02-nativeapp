import { Box, HStack, Image, ScrollView, Text, VStack } from "native-base"
import { Dimensions } from "react-native"

import { RecommendChefPropsType } from "../../../components/Card"

type ChefCardPropsType = RecommendChefPropsType

const ChefCard: React.FC<ChefCardPropsType> = (props) => {
  // カードのテキスト幅取得(画面padding * 2 + space + 画像幅)
  const descriptionWidth =
    Dimensions.get("window").width - (16 * 2 + 16 + props.imgSize.width)

  return (
    <HStack space={4}>
      <Box>
        <Image
          source={{
            // TODO:uriに変数が使えないので暫定対応
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt={`${props.title}の画像`}
          resizeMode="contain"
          rounded="2xl"
          w={props.imgSize.width}
          h={props.imgSize.height}
        />
      </Box>
      <VStack justifyContent="space-between" w="auto">
        <VStack>
          <Text
            mb={1}
            numberOfLines={1}
            fontSize="lg"
            fontWeight="bold"
          >{`${props.firstName}${props.lastName}`}</Text>
          <Text numberOfLines={3} color="gray.400" maxW={descriptionWidth}>
            {props.recommend}
          </Text>
        </VStack>
        <HStack>
          {/*
            TODO:uriに変数が使えないので暫定対応
            <Image source={{ uri: icon }} />
          */}
          <Text>{props.recipeCount}&nbsp;レシピ</Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

export const TopChefList: React.FC<{
  data: Omit<RecommendChefPropsType, "imgSize">[]
}> = (props) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <VStack space="4" px={4}>
        {props.data.map((item, index) => {
          return (
            <ChefCard
              key={index}
              imgSize={{ width: 88, height: 116 }}
              {...item}
            />
          )
        })}
      </VStack>
    </ScrollView>
  )
}
