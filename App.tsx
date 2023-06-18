import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NativeBaseProvider } from "native-base"
import { View, Text } from "react-native"
import { RecoilRoot } from "recoil"
import { SWRConfig } from "swr"

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

function App() {
  return (
    <RecoilRoot>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </SWRConfig>
    </RecoilRoot>
  )
}

export default App
