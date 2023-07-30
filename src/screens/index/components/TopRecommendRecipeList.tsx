import { HStack, ScrollView } from "native-base"

import { RecipeCard, RecommendRecipePropsType } from "../../../components/Card"

export const TopRecommendRecipeList: React.FC<{
  data: Omit<RecommendRecipePropsType, "imgSize">[]
}> = (props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HStack space="4" px={4}>
        {props.data.map((item, index) => {
          return <RecipeCard key={index} {...item} imgSize={160} />
        })}
      </HStack>
    </ScrollView>
  )
}
