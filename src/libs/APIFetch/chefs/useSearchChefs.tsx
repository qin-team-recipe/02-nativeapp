import useSWR from "swr"

// import { fetcher as defaultFetcher } from "../"
import { API_URL } from "../../../constants"
import { Chef, PageInfo, SWRResult } from "../type"

export type ChefsForSearch = {
  message: string
  data: {
    lists: Chef[]
    page_info: PageInfo
  }
}

export const useSearchChefs = (
  searchText?: string
  // fetcher?: (input: RequestInfo, init?: RequestInit) => any | undefined
): SWRResult<ChefsForSearch> => {
  const query = searchText ? `?q=${searchText}` : ""
  const { data, isLoading, error } = useSWR(
    `${API_URL}/chefs${query}`
    // fetcher || defaultFetcher
  )
  return {
    data,
    error,
    isLoading,
    isEmpty: !data?.data?.lists || data.data.lists.length === 0,
  }
}
