import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { TabNavigator } from "./TabNavigator"
import { ChefsScreen } from "../screens/chefs"
import { RecipesScreen } from "../screens/recipes"
import { SettingScreen } from "../screens/setting"
import { SignupScreen } from "../screens/signup"

const Stack = createNativeStackNavigator()

export const RootStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={TabNavigator} />
      <Stack.Screen name="Chefs" component={ChefsScreen} />
      <Stack.Screen name="Recipes" component={RecipesScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  )
}
