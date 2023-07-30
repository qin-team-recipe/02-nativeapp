import { Box, ScrollView, StatusBar } from "native-base"

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
      bgColor={props.bgColor || colors.white}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} p={props.padding || 0}>
        {props.children}
      </ScrollView>
    </Box>
  )
}
