import { AntDesign, Feather } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { FavoriteStacks } from "./FavoriteStacks"
import { SearchStacks } from "./SearchStacks"
import { ShoppingListStacks } from "./ShoppingListStacks"

// タブバー作成
const Tab = createBottomTabNavigator()

export const TabNavigator: React.FC = () => {
  const ACTIVE_COLOR = "#CA3214"
  const INACTIVE_COLOR = "#6F6E77"

  return (
    <Tab.Navigator
      initialRouteName="Index"
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
      }}
    >
      <Tab.Screen
        name="SearchStacks"
        component={SearchStacks}
        options={{
          tabBarLabel: "検索",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="FavoriteStacks"
        component={FavoriteStacks}
        options={{
          tabBarLabel: "お気に入り",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ShoppingListStacks"
        component={ShoppingListStacks}
        options={{
          tabBarLabel: "お買い物",
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="shopping-cart" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
