import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"
import { RecoilRoot } from "recoil"
import { SWRConfig } from "swr"

import { fetcher } from "./src/libs/APIFetch"
import { RootStackNavigator } from "./src/routing/"

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <SWRConfig value={{ fetcher }}>
        <NativeBaseProvider>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </SWRConfig>
    </RecoilRoot>
  )
}

export default App
