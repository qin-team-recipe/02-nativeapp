import { View, Text } from "react-native"

import { ViewContainer } from "../../components/layout"

export const IndexScreen: React.FC = () => {
  return (
    <ViewContainer noPadding white>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Index Screen</Text>
      </View>
    </ViewContainer>
  )
}
