import useSWR from "swr"

//import { fetcher as defaultFetcher } from ".."
import { API_URL } from "../../../constants"
import { SWRResult, Step } from "../type"

export type RecipeStepsForGet = {
  message: string
  data: Step[]
}

export const useGetRecipeSteps = (
  recipeId: number
  //fetcher?: (input: RequestInfo, init?: RequestInit) => any | undefined
): SWRResult<RecipeStepsForGet> => {
  const { data, isLoading, error } = useSWR(
    `${API_URL}/recipeSteps?recipe_id=${recipeId}`
    //fetcher || defaultFetcher
  )

  return {
    data,
    error,
    isLoading,
    isEmpty: !data?.data || data.data.length === 0,
  }
}
