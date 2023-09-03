import { NavigationProp } from "@react-navigation/native"

export type StackNavigation = NavigationProp<RootStackParamList>

export type RootStackParamList = {
  Index: {}
  Search: {
    searchText?: string
  }
}
