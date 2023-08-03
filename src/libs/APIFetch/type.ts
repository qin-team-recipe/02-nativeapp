export type SWRResult<T = any> = {
  data: T
  error: any
  isLoading: boolean
  isEmpty: boolean
}
