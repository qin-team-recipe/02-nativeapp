import { Stack, VStack, Text, Box } from "native-base"
import React from "react"

import { MainHeader, SubHeader } from "../../components/Label"
import { ViewContainer } from "../../components/layout"

export const FavoriteScreen: React.FC = () => {
  return (
    <ViewContainer>
      <MainHeader title="お気に入り" leftItem="setting" rightItem="mypage" />
      <Stack space={12} mb={4}>
        {/* シェフ */}
        <VStack space={2}>
          <SubHeader title="シェフ"></SubHeader>
          <Box m={2}>
            <Text>データがありません</Text>
          </Box>
        </VStack>

        {/* 新着レシピ */}
        <VStack space={2}>
          <SubHeader
            title="新着レシピ"
            link={{ href: "/favorites", text: "もっと見る" }}
          ></SubHeader>
          <Box m={2}>
            <Text>データがありません</Text>
          </Box>
        </VStack>

        {/* お気に入りレシピ */}
        <VStack space={2}>
          <SubHeader
            title="お気に入りレシピ"
            link={{ href: "/favorites", text: "もっと見る" }}
          ></SubHeader>
          <Box m={2}>
            <Text>データがありません</Text>
          </Box>
        </VStack>
      </Stack>
    </ViewContainer>
  )
}
