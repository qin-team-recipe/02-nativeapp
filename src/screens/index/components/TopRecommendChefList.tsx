import { Box, Center, HStack, ScrollView, Skeleton } from "native-base"

import { RecommendChefCard } from "../../../components/Card"
import { Chef, useGetRecommendChefs } from "../../../libs/APIFetch"

export const TopRecommendChefList: React.FC<object> = () => {
  const { data, error, isLoading, isEmpty } = useGetRecommendChefs()
  const chefs: Chef[] = data?.data

  if (isLoading) {
    const skeltonArray = [1, 2, 3, 4, 5, 6]
    return (
      <Center>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="4" px={4}>
            {skeltonArray.map((item, index) => {
              return (
                <Skeleton key={index} rounded="md" width={144} height={156} />
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
        {chefs.map((chef: Chef, index: number) => {
          return (
            <RecommendChefCard
              key={index}
              imgSize={{ width: 144, height: 156 }}
              image=""
              chef={chef}
            />
          )
        })}
      </HStack>
    </ScrollView>
  )
}
