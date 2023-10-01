import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { useAuth } from "../components/Auth/AuthProvider"
import { ShoppingListScreen } from "../screens/shopping-list"
import { SigninScreen } from "../screens/signin/screen"

const Stack = createNativeStackNavigator()

export const ShoppingListStacks: React.FC = () => {
  const { isAuthenticated } = useAuth()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
      ) : (
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          initialParams={{ sourceScreen: "ShoppingList" }}
        />
      )}
    </Stack.Navigator>
  )
}
