import { useNavigation } from "@react-navigation/native"
import { Box, Stack, VStack } from "native-base"

import { TopRecommendChefList, TopRecommendRecipeList } from "./components"
import { TopChefList } from "./components/TopChefList"
import { SearchInputText } from "../../components/Form"
import { SubHeader } from "../../components/Label"
import { ViewContainer } from "../../components/layout"

export const IndexScreen: React.FC = () => {
  const navigation = useNavigation<any>()

  const handleInputSubmitEditing = (text: string) => {
    text && navigation.navigate("Search", { searchText: text })
  }

  return (
    <ViewContainer>
      {/* 検索バー */}
      <Box my={4} px={2}>
        <SearchInputText onSubmitEditing={handleInputSubmitEditing} />
      </Box>
      <Stack space={12} mb={4}>
        {/* 注目のシェフ */}
        <VStack space={2}>
          <SubHeader title="注目のシェフ"></SubHeader>
          <TopRecommendChefList />
        </VStack>

        {/* 話題のレシピ */}
        <VStack space={2}>
          <SubHeader
            title="話題のレシピ"
            link={{ href: "/favorites", text: "もっと見る" }}
          ></SubHeader>
          <TopRecommendRecipeList />
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
