import { ScrollView, VStack } from "native-base"
import { chefDummyData } from "../DummyData"
import { ChefCard, RecommendChefPropsType } from "../../../components/Card"

export const SearchResultChefList: React.FC<{ searchText: string }> = (
  props
) => {
  const data: Omit<RecommendChefPropsType, "imgSize">[] = chefDummyData
  return (
    <ScrollView>
      <VStack space="2" px={2} mt={2}>
        {data.map((item, index) => {
          return (
            <ChefCard
              key={index}
              imgSize={{ width: 144, height: 156 }}
              {...item}
            />
          )
        })}
      </VStack>
    </ScrollView>
  )
}
