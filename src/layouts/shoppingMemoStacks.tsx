import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ShoppingMemoScreen } from "../screens/shoppingMemo"

const Stack = createNativeStackNavigator()

export const ShoppingMemoStacks: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ShoppingMemo" component={ShoppingMemoScreen} />
    </Stack.Navigator>
  )
}
