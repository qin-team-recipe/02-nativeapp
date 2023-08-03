import useSWR from "swr"

// import { fetcher as defaultFetcher } from "../"
import { API_URL } from "../../../constants"
import { SWRResult } from "../type"

export type Chef = {
  id: number
  screen_name: string
  display_name: string
  description: string
  recipes_count: number
  follows_count: number
  is_following: boolean
  chef_links: any | null
}

export type ChefsForGet = {
  message: string
  data: {
    lists: Chef[]
    page_info: {
      has_next_page: boolean
      has_previous_page: boolean
      start_cursor: number | ""
      end_cursor: number | ""
    }
  }
}

export const useGetChefs = (
  screenName?: string | undefined
  // fetcher?: (input: RequestInfo, init?: RequestInit) => any | undefined
): SWRResult<ChefsForGet> => {
  const { data, error } = useSWR(
    `${API_URL}/chefs${screenName ? "/" + screenName : ""}`
    // fetcher || defaultFetcher
  )
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  }
}
