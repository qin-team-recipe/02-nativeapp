import { Box, Center, Skeleton, Text } from "native-base"
import { ScrollView, StyleSheet, View } from "react-native"

import { RecipeCard } from "../../../components/Card"
import React from "react"
import {
  Recipe,
  useGetRecipes,
} from "../../../libs/APIFetch/chefs/useGetRecipes"

export const SearchResultRecipeList: React.FC<{ searchText: string }> = (
  props
) => {
  const { data, error, isLoading, isEmpty } = useGetRecipes(props.searchText)
  const recipes = data?.data.lists

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
        <Box m={2}>検索結果がありませんでした</Box>
      </Center>
    )
  }

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

  return (
    <Center>
      <ScrollView contentContainerStyle={styles.container}>
        <>
          {recipes?.map((item: Recipe, index: number) => (
            <View style={styles.item} key={index}>
              <RecipeCard
                imgSize={160}
                image=""
                title={item.title}
                text={item.description}
                chef={item.chef?.display_name ?? ""}
                good={item.favorites_count}
                comment={0}
              />
            </View>
          ))}
          {
            // 検索結果が1件の場合RecipeCardが中央に表示されてしまうため、
            // RecipeCardが左列に表示されるように空の要素を追加
            recipes?.length == 1 && (
              <View style={styles.item}>
                <Box w={160} />
              </View>
            )
          }
        </>
      </ScrollView>
    </Center>
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
