import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ShoppingListScreen } from "../screens/shopping-list"

const Stack = createNativeStackNavigator()

export const ShoppingListStacks: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
    </Stack.Navigator>
  )
}
