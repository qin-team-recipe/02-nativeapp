import { Box, Center, Skeleton, ScrollView, View, VStack } from "native-base"
import React from "react"

import { RecipeStepCard } from "../../../components/Card/RecipeStepCard"
import { Recipe, useGetRecipeSteps, Step } from "../../../libs/APIFetch/"

export const RecipeStepsList: React.FC<{ recipe: Recipe }> = (props) => {
  const { data, error, isLoading, isEmpty } = useGetRecipeSteps(props.recipe.id)
  const steps = data?.data

  if (isLoading) {
    const skeltonArray = [1, 2, 3, 4, 5, 6]
    return (
      <Center>
        <ScrollView w="full">
          {skeltonArray?.map((_, index) => (
            <View key={index} m={2} w="full">
              <Skeleton.Text rounded="md" mt={2} mb={2} lines={2} w="full" />
              <View
                borderWidth={0.5}
                borderBottomStyle="solid"
                borderColor="gray.300"
              />
            </View>
          ))}
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
        <Box m={2}>工程が登録されていません</Box>
      </Center>
    )
  }
  return (
    <Center>
      <ScrollView w="full">
        <>
          {steps?.map((step: Step, index: number) => (
            <VStack key={index}>
              <View>
                <RecipeStepCard step={step} />
              </View>
              <View
                borderWidth={0.5}
                borderBottomStyle="solid"
                borderColor="gray.300"
              />
            </VStack>
          ))}
        </>
      </ScrollView>
    </Center>
  )
}
