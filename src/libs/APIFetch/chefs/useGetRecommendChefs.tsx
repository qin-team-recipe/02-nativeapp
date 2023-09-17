import useSWR from "swr"

// import { fetcher as defaultFetcher } from "../"
import { API_URL } from "../../../constants"
import { Chef, SWRResult } from "../type"

export type RecommendChefsForGet = {
  message: string
  data: Chef[]
}

export const useGetRecommendChefs = (): SWRResult<RecommendChefsForGet> => {
  const { data, isLoading, error } = useSWR(
    `${API_URL}/recommends/chefs`
    // fetcher || defaultFetcher
  )
  return {
    data,
    error,
    isLoading,
    isEmpty: !data?.data || data.data.length === 0,
  }
}
