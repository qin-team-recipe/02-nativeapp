import useSWR from "swr"

//import { fetcher as defaultFetcher } from ".."
import { API_URL } from "../../../constants"
import { Ingredient, SWRResult } from "../type"

export type RecipeIngredientsForGet = {
  message: string
  data: Ingredient[]
}

export const useGetRecipeIngredients = (
  recipeId: number
  //fetcher?: (input: RequestInfo, init?: RequestInit) => any | undefined
): SWRResult<RecipeIngredientsForGet> => {
  const { data, isLoading, error } = useSWR(
    `${API_URL}/recipeIngredients?recipe_id=${recipeId}`
    //fetcher || defaultFetcher
  )

  return {
    data,
    error,
    isLoading,
    isEmpty: !data?.data || data.data.length === 0,
  }
}
