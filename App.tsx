import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"
import { RecoilRoot } from "recoil"
import { SWRConfig } from "swr"

import { fetcher } from "./src/libs/APIFetch"
import { RootStakNavigator } from "./src/routing/"

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <SWRConfig value={{ fetcher }}>
        <NativeBaseProvider>
          <NavigationContainer>
            <RootStakNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </SWRConfig>
    </RecoilRoot>
  )
}

export default App
