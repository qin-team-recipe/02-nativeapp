import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Box, Checkbox, HStack, Icon, VStack, View, Text } from "native-base"
import React, { useState } from "react"

import { MainHeader, SubHeader } from "../../components/Label"
import { ViewContainer } from "../../components/layout"

export const ShoppingListScreen: React.FC = () => {
  const [shoppingList] = useState<string[]>(["だしの素", "みりん"])

  return (
    <ViewContainer>
      <MainHeader title="買い物リスト" />
      <VStack space={2}>
        <View mt={2} />
        <SubHeader title="自分のメモ"></SubHeader>
        {shoppingList.map((value, index) => (
          <Box
            key={index}
            borderStyle="solid"
            borderWidth={1}
            borderColor="gray.300"
            mb={0}
          >
            <HStack minH={12} alignItems="center">
              <Checkbox
                rounded="full"
                value=""
                ml={2}
                accessibilityLabel="checkbox"
              />
              <Text ml={2}>{value}</Text>
              <Icon
                as={<MaterialCommunityIcons name="dots-vertical" />}
                size="6"
                ml="auto"
                color="black"
              />
            </HStack>
          </Box>
        ))}
      </VStack>
    </ViewContainer>
  )
}
