import { RouteProp, useRoute } from "@react-navigation/native"
import { Box, Stack, VStack, HStack } from "native-base"
import React, { useState } from "react"

import { SearchResultRecipeList, SearchResultChefList } from "./components"
import { PageBackButton } from "../../components/Button"
import { SearchInputText } from "../../components/Form"
import { TabContainer } from "../../components/Tab"
import { ViewContainer } from "../../components/layout"
import { SearchStackParamList } from "../../routing/"

export const SearchScreen: React.FC = () => {
  const route = useRoute<RouteProp<SearchStackParamList, "Search">>()
  const [searchText, setSearchText] = useState<string>(
    route.params.searchText ?? ""
  )

  const handleInputSubmitEditing = (text: string) => {
    setSearchText(text)
  }

  const tabs = [
    {
      title: "レシピ",
      content: () => <SearchResultRecipeList searchText={searchText} />,
    },
    {
      title: "シェフ",
      content: () => <SearchResultChefList searchText={searchText} />,
    },
  ]

  return (
    <ViewContainer>
      <HStack justifyContent="space-between" alignItems="center" px={2} py={4}>
        {/* 戻るボタン */}
        <Box>
          <PageBackButton />
        </Box>
        {/* 検索バー */}
        <Box mr={1} ml={1} flex={1}>
          <SearchInputText
            initialSearchText={route.params.searchText ?? ""}
            onSubmitEditing={handleInputSubmitEditing}
          />
        </Box>
      </HStack>
      <Stack space={2} mb={4}>
        <VStack>
          {/* タブ */}
          <TabContainer tabs={tabs} />
        </VStack>
      </Stack>
    </ViewContainer>
  )
}
