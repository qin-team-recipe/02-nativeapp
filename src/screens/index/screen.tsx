import { AntDesign } from "@expo/vector-icons"
import { Box, Icon, Input, Stack, VStack } from "native-base"

import { chefDummyData, recipesDummyData } from "./DummyData"
import { TopRecommendChefList, TopRecommendRecipeList } from "./components"
import { TopChefList } from "./components/TopChefList"
import { SubHeader } from "../../components/Label"
import { ViewContainer } from "../../components/Layout"
import { DummyModal } from "../../libs/dummy"

export const IndexScreen: React.FC = () => {
  return (
    <ViewContainer>
      {/* 検索バー */}
      <Box my={4} px={4}>
        <Input
          variant="filled"
          InputLeftElement={
            <Icon
              as={<AntDesign name="search1" />}
              size="5"
              ml="2"
              color="muted.400"
            />
          }
          placeholder="シェフやレシピを検索"
          fontSize={"sm"}
        />
      </Box>
      <Stack space={12} mb={4}>
        {/* 注目のシェフ */}
        <VStack space={2}>
          <SubHeader title="注目のシェフ"></SubHeader>
          <TopRecommendChefList data={chefDummyData} />
        </VStack>

        {/* 話題のレシピ */}
        <VStack space={2}>
          <SubHeader
            title="話題のレシピ"
            link={{ href: "/favorites", text: "もっと見る" }}
          ></SubHeader>
          <TopRecommendRecipeList data={recipesDummyData} />
        </VStack>

        {/* シェフ */}
        <VStack space={2}>
          <SubHeader
            title="シェフ"
            link={{ href: "/favorites", text: "もっと見る" }}
          ></SubHeader>
          <TopChefList />
        </VStack>
      </Stack>

      {/* TODO: モーダルを実装してみる */}
      {/* モーダル */}
      {/* <DummyModal /> */}
    </ViewContainer>
  )
}
