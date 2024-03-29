import useSWR from "swr"

// import { fetcher as defaultFetcher } from "../"
import { API_URL } from "../../../constants"
import { Chef, PageInfo, SWRResult } from "../type"

export type ChefsForGet = {
  message: string
  data: {
    lists: Chef[]
    page_info: PageInfo
  }
}

export const useGetChefs = (
  screenName?: string
  // fetcher?: (input: RequestInfo, init?: RequestInit) => any | undefined
): SWRResult<ChefsForGet> => {
  const { data, isLoading, error } = useSWR(
    `${API_URL}/chefs${screenName ? "/" + screenName : ""}`
    // fetcher || defaultFetcher
  )
  return {
    data,
    error,
    isLoading,
    isEmpty: !data?.data?.lists || data.data.lists.length === 0,
  }
}
