import { Box, Center, HStack, ScrollView, Skeleton, VStack } from "native-base"
import React from "react"

import { RecipeCard } from "../../../components/Card"
import { Recipe, useGetRecommendRecipes } from "../../../libs/APIFetch"

export const TopRecommendRecipeList: React.FC<object> = () => {
  const { data, error, isLoading, isEmpty } = useGetRecommendRecipes()
  const recipes: Recipe[] = data?.data?.lists

  if (isLoading) {
    const skeltonArray = [1, 2, 3, 4, 5, 6]
    return (
      <Center>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="4" px={4}>
            {skeltonArray.map((item, index) => {
              return (
                <VStack key={index}>
                  <Skeleton rounded="md" size={160} />
                  <Skeleton.Text rounded="md" mt={2} lines={2} w={160} />
                </VStack>
              )
            })}
          </HStack>
        </ScrollView>
      </Center>
    )
  }

  if (error) {
    return (
      <Center>
        <Box m={2}>データ取得に失敗しました</Box>
      </Center>
    )
  }
  if (isEmpty) {
    return (
      <Center>
        <Box m={2}>データがありませんでした</Box>
      </Center>
    )
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HStack space="4" px={4}>
        {recipes.map((recipe, index) => {
          return (
            <RecipeCard key={index} imgSize={160} image="" recipe={recipe} />
          )
        })}
      </HStack>
    </ScrollView>
  )
}
