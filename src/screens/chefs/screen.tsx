import { useRoute, RouteProp } from "@react-navigation/native"
import { Box, ScrollView, VStack, Text, HStack, Button } from "native-base"

import { ChefRecipeList } from "./components"
import { PageBackButton } from "../../components/Button"
import { TabContainer } from "../../components/Tab"
import { ViewContainer } from "../../components/layout"
import { RootStackParamList } from "../../routing"

export const ChefsScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Chefs">>()
  const chef = route.params.chef

  const tabs = [
    {
      title: "新着レシピ",
      content: () => <ChefRecipeList type="latest" chefId={chef.id} />,
    },
    {
      title: "人気レシピ",
      content: () => <ChefRecipeList type="favorites" chefId={chef.id} />,
    },
  ]

  return (
    <ViewContainer>
      <ScrollView>
        <VStack>
          <Box p={2}>
            <PageBackButton />
          </Box>

          {/* シェフ概要 */}
          <Box p={2}>
            <Text bold fontSize={"xl"}>
              {chef.display_name}
            </Text>
            <Text>{chef.description}</Text>

            <HStack alignItems="center" m={2}>
              <Text ml={1} color="gray.500">
                {chef.recipes_count} レシピ
              </Text>
              <Text ml={4} color="gray.500">
                {chef.follows_count} フォロー
              </Text>
            </HStack>

            <Button bgColor="red.400">フォローする</Button>
          </Box>

          {/* 新着レシピ・人気レシピ */}
          <TabContainer tabs={tabs} />
        </VStack>
      </ScrollView>
    </ViewContainer>
  )
}
