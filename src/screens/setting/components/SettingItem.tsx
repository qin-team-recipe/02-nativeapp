import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons"
import { Box, HStack, Icon, Text } from "native-base"

export const SettingItem: React.FC<{
  title: string
  icon?: "movepage" | "link" | "logout" | "deleteaccount"
}> = (props) => {
  let rightIcon = <></>
  if (props.icon) {
    if (props.icon === "movepage") {
      rightIcon = <MaterialIcons name="keyboard-arrow-right" />
    } else if (props.icon === "link") {
      rightIcon = <MaterialCommunityIcons name="arrow-top-right" />
    } else if (props.icon === "logout") {
      rightIcon = <MaterialIcons name="logout" />
    } else if (props.icon === "deleteaccount") {
      rightIcon = <Feather name="info" />
    }
  }

  return (
    <Box m={2}>
      <HStack>
        <Text ml={2}>{props.title}</Text>
        <Icon as={rightIcon} size="6" ml="auto" color="black" />
      </HStack>
    </Box>
  )
}
