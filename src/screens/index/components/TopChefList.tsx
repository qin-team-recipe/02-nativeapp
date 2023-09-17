import { ScrollView, Text, VStack } from "native-base"

import { useGetChefs } from "../../..//libs/APIFetch"
import { ChefCard } from "../../../components/Card"

export const TopChefList: React.FC = () => {
  const { data, error, isLoading, isEmpty } = useGetChefs()
  //console.log(data)
  const chefs = data?.data.lists

  // TODO: エラー・ローディング・空配列用コンポーネント作成
  if (error) {
    return <Text>エラー</Text>
  }
  if (isLoading) {
    return <Text>ローディング中</Text>
  }
  if (isEmpty) {
    return <Text>データがありません</Text>
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <VStack space="4" px={4}>
        {chefs.map((chef, index) => {
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
