import { Box, ScrollView, StatusBar, View } from "native-base"
import { SafeAreaView } from "react-native"

import { colors } from "../../constants"
type Props = {
  children?: React.ReactNode
  bgColor?: string
  padding?: number
}

export const ViewContainer: React.FC<Props> = (props) => {
  return (
    <Box
      flex={1}
      flexDir="column"
      justifyContent="flex-start"
      alignItems="stretch"
      bgColor="black"
      //bgColor={props.bgColor || colors.white}
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View bgColor={props.bgColor || colors.white}>
          <StatusBar barStyle="light-content" />
          <ScrollView
            showsVerticalScrollIndicator={false}
            p={props.padding || 0}
          >
            {props.children}
          </ScrollView>
        </View>
      </SafeAreaView>
    </Box>
  )
}
