import { Box, Center, ScrollView, Skeleton, View } from "native-base"
import { StyleSheet } from "react-native"

import { RecipeCard } from "../../../components/Card"
import { useGetChefRecipes, ChefRecipe } from "../../../libs/APIFetch"

export const ChefRecipeList: React.FC<{
  type: "latest" | "favorites"
  chefId: number
}> = (props) => {
  const { data, error, isLoading, isEmpty } = useGetChefRecipes(
    props.type,
    props.chefId
  )
  const chefRecipes: ChefRecipe[] = data?.data?.lists

  if (isLoading) {
    const skeltonArray = [1, 2, 3, 4, 5, 6]
    return (
      <Center>
        <ScrollView contentContainerStyle={styles.container}>
          {skeltonArray?.map((_, index) => (
            <View style={styles.item} key={index}>
              <Skeleton rounded="md" size={160} />
              <Skeleton.Text rounded="md" mt={2} lines={2} w={160} />
            </View>
          ))}
        </ScrollView>
      </Center>
    )
  }

  if (error) {
    return (
      <Center>
        <Box m={2}>データ取得に失敗しました</Box>
      </Center>
    )
  }
  if (isEmpty) {
    return (
      <Center>
        <Box m={2}>データがありませんでした</Box>
      </Center>
    )
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <>
        {chefRecipes?.map((chefRecipe: ChefRecipe, index: number) => (
          <View style={styles.item} key={index}>
            <RecipeCard imgSize={160} image="" recipe={chefRecipe.recipe} />
          </View>
        ))}
        {
          // 検索結果が1件の場合RecipeCardが中央に表示されてしまうため、
          // RecipeCardが左列に表示されるように空の要素を追加
          chefRecipes?.length === 1 && (
            <View style={styles.item}>
              <Box w={160} />
            </View>
          )
        }
      </>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  item: {
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    paddingTop: 2,
    paddingBottom: 2,
    marginHorizontal: 1,
  },
})
