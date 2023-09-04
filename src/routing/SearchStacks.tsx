import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { IndexScreen } from "../screens/index"
import { SearchScreen } from "../screens/search"

const Stack = createNativeStackNavigator()

export const SearchStacks: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  )
}
