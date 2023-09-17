import useSWR from "swr"

//import { fetcher as defaultFetcher } from ".."
import { API_URL } from "../../../constants"
import { PageInfo, SWRResult, Recipe } from "../type"

export type RecommendRecipesForGet = {
  message: string
  data: {
    lists: Recipe[]
    page_info: PageInfo
  }
}

export const useGetRecommendRecipes = (): SWRResult<RecommendRecipesForGet> => {
  const { data, isLoading, error } = useSWR(
    `${API_URL}/recommends/recipes`
    //fetcher || defaultFetcher
  )

  return {
    data,
    error,
    isLoading,
    isEmpty: !data?.data?.lists || data.data.lists.length === 0,
  }
}
