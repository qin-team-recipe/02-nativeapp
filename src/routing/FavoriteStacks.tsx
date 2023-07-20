import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { FavoriteScreen } from "../screens/favorites"

const Stack = createNativeStackNavigator()

export const FavoriteStacks: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
    </Stack.Navigator>
  )
}
