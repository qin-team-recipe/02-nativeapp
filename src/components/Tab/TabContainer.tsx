import { Box, Pressable, ScrollView, Text, View } from "native-base"
import React, { useCallback, useEffect, useState } from "react"
import { Dimensions, StyleSheet } from "react-native"
import { SceneMap, TabView } from "react-native-tab-view"

interface Tab {
  title: string
  content: React.FC
}

interface TabContainerProps {
  tabs: Tab[]
  activeIndex?: number
}

const windowHeight = Dimensions.get("window").height

export const TabContainer: React.FC<TabContainerProps> = ({
  tabs,
  activeIndex,
}) => {
  const [index, setIndex] = useState<number>(activeIndex ?? 0)
  const [routes, setRoutes] = useState(
    tabs.map((tab) => ({
      key: tab.title,
      title: tab.title,
    }))
  )
  const [heights, setHeights] = useState<number[]>(Array(tabs.length).fill(0))

  useEffect(() => {
    setRoutes(
      tabs.map((tab) => ({
        key: tab.title,
        title: tab.title,
      }))
    )
    setHeights(Array(tabs.length).fill(0))
  }, [tabs])

  const renderScene = useCallback(() => {
    const sceneMap: { [key: string]: React.FC } = {}
    tabs.map((tab) => {
      sceneMap[tab.title] = tab.content
    })
    return SceneMap(sceneMap)
  }, [tabs])

  const renderTabBar = useCallback(() => {
    return (
      <Box flexDirection="row">
        {routes.map((route: any, i: number) => {
          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={index === i ? "cyan.500" : "coolGray.200"}
              flex={1}
              alignItems="center"
              p="0"
            >
              <Pressable
                onPress={() => {
                  setIndex(i)
                }}
              >
                <Box style={styles.tabBarBox}>
                  <Text>{route.title}</Text>
                </Box>
              </Pressable>
            </Box>
          )
        })}
      </Box>
    )
  }, [tabs, index])

  const setContainerHeight = useCallback(
    (containerHeight: number, index: number) => {
      // 高さを一度も計算していなければ計算して保持する
      if (heights[index] === 0 && containerHeight !== 0) {
        const newHeights = [...heights]
        newHeights[index] = containerHeight
        setHeights(newHeights)
      }
    },
    [heights]
  )

  if (heights[index] === 0) {
    //console.log(new Date().getTime() + " --- dummy render ---")
    /* TODO
    react-native-tab-viewの不具合でTabViewの高さが自動計算されないため、
    TabViewを使わずにコンテンツを表示させて高さを取得し、再びTabViewを使って再描画している
    */
    return (
      <View style={styles.container}>
        <ScrollView
          onLayout={(event) => {
            // ダミーを表示して高さを取得
            const containerHeight = event.nativeEvent.layout.height
            setContainerHeight(containerHeight, index)
          }}
          style={{ display: "flex" }}
        >
          <>
            <Box flexDirection="row">
              {routes.map((route: any, i: number) => {
                return (
                  <Box
                    key={i}
                    borderBottomWidth="3"
                    borderColor={index === i ? "cyan.500" : "coolGray.200"}
                    flex={1}
                    alignItems="center"
                    p="0"
                  >
                    <Box style={styles.tabBarBox}>
                      <Text>{route.title}</Text>
                    </Box>
                  </Box>
                )
              })}
            </Box>
            {tabs[index].content({})}
          </>
        </ScrollView>
      </View>
    )
  }

  //console.log(new Date().getTime() + " --- render ---")
  return (
    <View style={styles.container}>
      <ScrollView style={{ display: "flex" }}>
        <TabView
          navigationState={{
            index,
            routes,
          }}
          renderScene={renderScene()}
          renderTabBar={renderTabBar}
          onIndexChange={(index) => setIndex(index)}
          initialLayout={{ width: Dimensions.get("window").width }}
          style={{
            height: heights[index] === 0 ? windowHeight : heights[index],
          }}
        />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  backdrop: {
    flex: 1,
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.3,
  },
  tabBarBox: {
    minWidth: "100%",
    minHeight: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})
