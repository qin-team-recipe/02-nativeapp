import useSWR from "swr"

//import { fetcher as defaultFetcher } from ".."
import { API_URL } from "../../../constants"
import { PageInfo, SWRResult, ChefRecipe } from "../type"

export type ChefRecipesForGet = {
  message: string
  data: {
    lists: ChefRecipe[]
    page_info: PageInfo
  }
}

export const useGetChefRecipes = (
  type: "latest" | "favorites",
  chefId: number
  //fetcher?: (input: RequestInfo, init?: RequestInit) => any | undefined
): SWRResult<ChefRecipesForGet> => {
  const { data, isLoading, error } = useSWR(
    `${API_URL}/chefRecipes?type=${type}&chef_id=${chefId}`
    //fetcher || defaultFetcher
  )

  return {
    data,
    error,
    isLoading,
    isEmpty: !data?.data?.lists || data.data.lists.length === 0,
  }
}
