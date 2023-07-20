import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { IndexScreen } from "../screens/index"

const Stack = createNativeStackNavigator()

export const SearchStacks: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={IndexScreen} />
    </Stack.Navigator>
  )
}
