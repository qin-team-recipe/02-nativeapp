import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"
import { RecoilRoot } from "recoil"
import { SWRConfig } from "swr"

import { AuthProvider } from "./src/components/Auth/AuthProvider"
import { fetcher } from "./src/libs/APIFetch"
import { RootStackNavigator } from "./src/routing/"

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <SWRConfig value={{ fetcher }}>
        <NativeBaseProvider>
          <AuthProvider>
            <NavigationContainer>
              <RootStackNavigator />
            </NavigationContainer>
          </AuthProvider>
        </NativeBaseProvider>
      </SWRConfig>
    </RecoilRoot>
  )
}

export default App
