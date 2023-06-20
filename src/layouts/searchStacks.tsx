import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { SearchScreen } from "../screens/search/screen"

const Stack = createNativeStackNavigator()

export const SearchStacks: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  )
}
