import { Text, VStack } from "native-base"

import { Ingredient } from "../../libs/APIFetch/type"

export type RecipeIngredientCardPropsType = {
  ingredient: Ingredient
}

export const RecipeIngredientCard: React.FC<RecipeIngredientCardPropsType> = (
  props
) => {
  return (
    <VStack m={2} px={1}>
      <Text numberOfLines={2} fontWeight="bold">
        {props.ingredient.name}
      </Text>
      <Text numberOfLines={1} fontSize="xs" color="gray.400">
        {props.ingredient.description}
      </Text>
    </VStack>
  )
}
