import { Box, HStack, Image, ScrollView, Text, VStack } from "native-base"
import { Dimensions } from "react-native"

import { Chef, useGetChefs } from "../../..//libs/APIFetch"

type ChefCardProps = Pick<
  Chef,
  "display_name" | "description" | "recipes_count"
> & { imgSize: { width: number; height: number } }

const ChefCard: React.FC<ChefCardProps> = (props) => {
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
          alt={`${props.display_name}の画像`}
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
          >{`${props.display_name}`}</Text>
          <Text numberOfLines={3} color="gray.400" maxW={descriptionWidth}>
            {props.description}
          </Text>
        </VStack>
        <HStack>
          {/*
            TODO:uriに変数が使えないので暫定対応
            <Image source={{ uri: icon }} />
          */}
          <Text>{props.recipes_count}&nbsp;レシピ</Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

export const TopChefList: React.FC = () => {
  const { data, error, isLoading, isEmpty } = useGetChefs()
  console.log(data)
  const chefs = data?.data.lists

  // TODO: エラー・ローディング・空配列用コンポーネント作成
  if (error) {
    return <div>エラー</div>
  }
  if (isLoading) {
    return <div>ローディング中</div>
  }
  if (isEmpty) {
    return <div>データがありません</div>
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <VStack space="4" px={4}>
        {chefs.map((item, index) => {
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
