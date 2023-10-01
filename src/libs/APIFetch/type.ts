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

export type User = {
  id: number
  screen_name: string
  display_name: string
  email: string
}

export type Chef = {
  id: number
  screen_name: string
  display_name: string
  description: string
  recipes_count: number
  follows_count: number
  is_following: boolean
  chef_links: Link[] | null
}

export type Recipe = {
  id: number
  watch_id: string
  title: string
  description: string
  servings: number
  is_draft: boolean
  published_status: string
  favorites_count: number
  chef?: Chef
  user?: User
}

export type Step = {
  id: number
  recipe_id: string
  title: string
  description: string
  step_number: number
}
export type Ingredient = {
  id: number
  recipe_id: string
  name: string
  description: string
}

export type Link = {
  id: number
  chef_id: number
  service_name: string
  url: string
}

export type ChefRecipe = {
  id: number
  chef_id: number
  recipe_id: number
  recipe: Recipe
}

export type GoogleUser = {
  display_name: string
  email: string
  service_name: string
  service_user_id: string
}
