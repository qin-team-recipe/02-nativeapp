import { View, StyleSheet, StatusBar } from "react-native"

import { colors } from "../../constants"

type Props = {
  children?: React.ReactNode
  style?: Record<string, any>
  noPadding?: boolean
  white?: boolean
}

export const ViewContainer: React.FC<Props> = (props) => {
  return (
    <View
      style={[
        styles.container,
        props.noPadding ? styles.noPadding : {},
        props.white ? styles.white : {},
        props.style,
      ]}
    >
      <StatusBar barStyle="light-content" />
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: colors.white,
  },
  noPadding: {
    paddingTop: 0,
  },
  white: {
    backgroundColor: colors.white,
  },
})
