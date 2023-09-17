import useSWR from "swr"

//import { fetcher as defaultFetcher } from ".."
import { API_URL } from "../../../constants"
import { PageInfo, SWRResult, Recipe } from "../type"

export type RecipesForSearch = {
  message: string
  data: {
    lists: Recipe[]
    page_info: PageInfo
  }
}

export const useSearchRecipes = (
  searchText?: string
  //fetcher?: (input: RequestInfo, init?: RequestInit) => any | undefined
): SWRResult<RecipesForSearch> => {
  const query = searchText ? `?q=${searchText}` : ""
  const { data, isLoading, error } = useSWR(
    `${API_URL}/recipes${query}`
    //fetcher || defaultFetcher
  )

  return {
    data,
    error,
    isLoading,
    isEmpty: !data?.data?.lists || data.data.lists.length === 0,
  }
}
