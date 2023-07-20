import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"
import { RecoilRoot } from "recoil"
import { SWRConfig } from "swr"

import { TabNavigator } from "./src/routing/TabNavigator"

function App(): JSX.Element {
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
            <TabNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </SWRConfig>
    </RecoilRoot>
  )
}

export default App
