import { NavigationProp } from "@react-navigation/native"

import { Chef, Recipe } from "../libs/APIFetch/"

export type StackNavigation = NavigationProp<
  RootStackParamList | SearchStackParamList
>

export type RootStackParamList = {
  Recipes: {
    recipe: Recipe
  }
  Chefs: {
    chef: Chef
  }
}

export type SearchStackParamList = {
  Index: object
  Search: {
    searchText?: string
  }
}
