import { HStack, ScrollView } from "native-base"

import { ChefCard, RecommendChefPropsType } from "../../../components/Card"

export const TopRecommendChefList: React.FC<{
  data: Omit<RecommendChefPropsType, "imgSize">[]
}> = (props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HStack space="4" px={4}>
        {props.data.map((item, index) => {
          return (
            <ChefCard
              key={index}
              imgSize={{ width: 144, height: 156 }}
              {...item}
            />
          )
        })}
      </HStack>
    </ScrollView>
  )
}
