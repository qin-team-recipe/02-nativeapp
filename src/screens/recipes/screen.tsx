import { RouteProp, useRoute } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import {
  Text,
  Image,
  View,
  VStack,
  Box,
  ScrollView,
  HStack,
  Button,
} from "native-base"
import { StyleSheet } from "react-native"

import { RecipeIngredientsList, RecipeStepsList } from "./components"
import { PageBackButton } from "../../components/Button"
import { TabContainer } from "../../components/Tab"
import { ViewContainer } from "../../components/layout"
import { RootStackParamList } from "../../routing"

export const RecipesScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Recipes">>()
  const recipe = route.params.recipe
  const tabs = [
    {
      title: "作り方",
      content: () => <RecipeStepsList recipe={recipe} />,
    },
    {
      title: "材料",
      content: () => <RecipeIngredientsList recipe={recipe} />,
    },
  ]

  return (
    <ViewContainer>
      <ScrollView>
        <VStack>
          {/* 画像 */}
          <View style={styles.container}>
            <Image
              source={{
                // TODO:uriに変数が使えないので暫定対応
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt={`${recipe.title}の画像`}
              resizeMode="cover"
              w="100%"
              h="auto"
              style={{
                aspectRatio: 1,
              }}
            />
            <LinearGradient
              colors={[
                "rgba(255, 255, 255, 0.0)",
                "rgba(255, 255, 255, 0.3)",
                "rgba(255, 255, 255, 1.0)",
              ]}
              style={styles.gradient}
            />
            <View style={styles.pagebackbutton}>
              <PageBackButton />
            </View>
          </View>

          {/* 概要 */}
          <Box p={2}>
            <VStack>
              <Text bold fontSize={"xl"}>
                {recipe.title}
              </Text>
              <Text>{recipe.description}</Text>
              <HStack alignItems="center" m={2}>
                {/* シェフ */}
                <Image
                  source={{
                    // TODO:uriに変数が使えないので暫定対応
                    uri: "https://wallpaperaccess.com/full/317501.jpg",
                  }}
                  alt={`${recipe.chef?.display_name}の画像`}
                  resizeMode="contain"
                  w={10}
                  h={10}
                  style={{
                    aspectRatio: 1,
                  }}
                  rounded="full"
                />
                <Text ml={1} color="gray.500">
                  {recipe.chef?.display_name}
                </Text>
                <Text ml={4} color="gray.500">
                  {recipe.favorites_count} お気に入り
                </Text>
              </HStack>
              <Button bgColor="red.400">お気に入りに追加</Button>
            </VStack>
          </Box>

          {/* 工程・材料 */}
          <TabContainer tabs={tabs} />
        </VStack>
      </ScrollView>
    </ViewContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    aspectRatio: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 60,
  },
  pagebackbutton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
})
