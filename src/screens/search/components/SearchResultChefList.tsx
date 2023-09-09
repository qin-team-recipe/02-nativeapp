import { Box, Center, HStack, ScrollView, Skeleton, VStack } from "native-base"

import { ChefCard } from "../../../components/Card"
import { Chef, useSearchChefs } from "../../../libs/APIFetch"

export const SearchResultChefList: React.FC<{ searchText: string }> = (
  props
) => {
  const { data, error, isLoading, isEmpty } = useSearchChefs(props.searchText)
  const chefs = data?.data.lists

  if (isLoading) {
    const skeltonArray = [1, 2, 3, 4, 5, 6]
    return (
      <Center>
        <ScrollView m={2} w="full">
          {skeltonArray?.map((_, index) => (
            <HStack key={index} m={1} w="full">
              <Skeleton rounded="md" width={88} height={116} />
              <VStack ml={4} mr={4} w="full">
                <Skeleton rounded="lg" h={6} w={100} />
                <Skeleton.Text rounded="md" mt={2} lines={3} />
                <Skeleton.Text rounded="md" mt={2} lines={1} w={60} />
              </VStack>
            </HStack>
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
        <Box m={2}>検索結果がありませんでした</Box>
      </Center>
    )
  }

  return (
    <ScrollView w="full">
      <VStack space="2" px={2} mt={2}>
        {chefs.map((chef: Chef, index: number) => {
          return (
            <ChefCard
              key={index}
              imgSize={{ width: 88, height: 116 }}
              image=""
              chef={chef}
            />
          )
        })}
      </VStack>
    </ScrollView>
  )
}
