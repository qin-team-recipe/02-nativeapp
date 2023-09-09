import {
  Box,
  Pressable,
  ScrollView,
  useColorModeValue,
  Text,
  View,
} from "native-base"
import React, { useCallback, useEffect, useState } from "react"
import { Dimensions, Animated } from "react-native"
import { SceneMap, TabView } from "react-native-tab-view"

interface Tab {
  title: string
  content: React.FC
}

interface TabContainerProps {
  tabs: Tab[]
  activeIndex?: number
}

export const TabContainer: React.FC<TabContainerProps> = ({
  tabs,
  activeIndex,
}) => {
  const [height, setHeight] = useState<number>(0)
  const [index, setIndex] = useState<number>(activeIndex ?? 0)
  const [routes, setRoutes] = useState(
    tabs.map((tab) => ({
      key: tab.title,
      title: tab.title,
    }))
  )

  useEffect(() => {
    const routes = tabs.map((tab) => ({
      key: tab.title,
      title: tab.title,
    }))
    setRoutes(routes)
    setHeight(0)
  }, [tabs])

  const sceneMap: { [key: string]: React.FC } = {}
  tabs.forEach((tab) => {
    sceneMap[tab.title] = tab.content
  })
  const renderScene = SceneMap(sceneMap)

  const renderTabBar = useCallback(
    (props: any) => {
      return (
        <Box flexDirection="row">
          {props.navigationState.routes.map((route: any, i: number) => {
            const color =
              index === i
                ? useColorModeValue("#000", "#e5e5e5")
                : useColorModeValue("#1f2937", "#a1a1aa")
            const borderColor =
              index === i
                ? "cyan.500"
                : useColorModeValue("coolGray.200", "gray.400")
            return (
              <Box
                key={i}
                borderBottomWidth="3"
                borderColor={borderColor}
                flex={1}
                alignItems="center"
                p="0"
              >
                <Pressable
                  onPress={() => {
                    onIndexChange(i)
                  }}
                >
                  <Box
                    minW="100%"
                    minH={10}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Animated.Text
                      style={{
                        color,
                      }}
                    >
                      {route.title}
                    </Animated.Text>
                  </Box>
                </Pressable>
              </Box>
            )
          })}
        </Box>
      )
    },
    [tabs, index]
  )

  const setContainerHeight = (containerHeight: number) => {
    //console.log(new Date().getTime() + " setContainerHeight=" + containerHeight)
    if (height === 0 && containerHeight !== 0) {
      setHeight(containerHeight + 30)
    }
  }
  const onIndexChange = (index: number) => {
    //console.log(new Date().getTime() + " onIndexChange index=" + index)
    setIndex(index)
    setHeight(0)
  }

  return (
    <View>
      <ScrollView style={{ flex: 1 }}>
        <TabView
          navigationState={{
            index,
            routes,
          }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={onIndexChange}
          initialLayout={{ width: Dimensions.get("window").width }}
          style={{ height }}
        />
      </ScrollView>

      {/* TODO
        react-native-tab-viewの不具合でTabViewの高さが自動計算されないため、
        TabViewを使わずにコンテンツを表示させて高さを取得し、再びTabViewを使って再描画している 
      */}
      <ScrollView
        onLayout={(event) => {
          // 高さを取得
          const containerHeight = event.nativeEvent.layout.height
          setContainerHeight(containerHeight)
        }}
        style={{ display: height === 0 ? "flex" : "none" }}
      >
        <Box flexDirection="row">
          {tabs.map((tab, tabIndex) => (
            <Box
              key={tab.title}
              borderBottomWidth="3"
              borderColor={
                index === tabIndex
                  ? "cyan.500"
                  : useColorModeValue("coolGray.200", "gray.400")
              }
              flex={1}
              alignItems="center"
              p="0"
            >
              <Box
                minW="100%"
                minH={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text>{tab.title}</Text>
              </Box>
            </Box>
          ))}
        </Box>
        {tabs.map((tab, tabIndex) => (
          <View
            key={tab.title}
            style={{ display: index === tabIndex ? "flex" : "none" }}
          >
            <tab.content />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
