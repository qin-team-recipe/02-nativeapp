import { AntDesign } from "@expo/vector-icons"
import { Center, HStack, Text } from "native-base"
import React from "react"

type Props = {
  count: number
}

export const FavoriteCount: React.FC<Props> = (props) => {
  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top={2}
      right={2}
      px={2}
      rounded="full"
      bgColor="rgba(4,0,19,0.483)"
    >
      <Center mr={1}>
        <AntDesign name="hearto" color="white" />
      </Center>
      <Text color="white">{props.count}</Text>
    </HStack>
  )
}
