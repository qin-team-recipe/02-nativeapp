import { NavigationProp } from "@react-navigation/native"

import { Chef, GoogleUser, Recipe } from "../libs/APIFetch/"

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
  Signin: {
    sourceScreen: string
  }
  Signup: {
    googleUser: GoogleUser
  }
  Setting: object
}

export type SearchStackParamList = {
  Index: object
  Search: {
    searchText?: string
  }
}

export type FavoriteStackParamList = {
  Signin: object
  Favorite: object
}

export type ShoppingListStackParamList = {
  Signin: object
  ShoppingList: object
}
