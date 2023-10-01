import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { useAuth } from "../components/Auth/AuthProvider"
import { FavoriteScreen } from "../screens/favorites"
import { SigninScreen } from "../screens/signin/screen"

const Stack = createNativeStackNavigator()

export const FavoriteStacks: React.FC = () => {
  const { isAuthenticated } = useAuth()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
      ) : (
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          initialParams={{ sourceScreen: "Favorite" }}
        />
      )}
    </Stack.Navigator>
  )
}
