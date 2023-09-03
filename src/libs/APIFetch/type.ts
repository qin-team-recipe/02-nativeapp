export type SWRResult<T = any> = {
  data: T
  error: any
  isLoading: boolean
  isEmpty: boolean
}

export type PageInfo = {
  length: number
  has_next_page: boolean
  has_previous_page: boolean
  start_cursor: string | ""
  end_cursor: string | ""
}
