import { Box, Image, Pressable, Text } from "native-base"
// import { useRecoilState } from "recoil"

// import { ModalVisibilityState } from "../../libs/dummy"

export type RecommendChefPropsType = {
  imgSize: {
    width: number
    height: number
  }
  image: string
  title: string
  firstName?: string
  lastName?: string
  recommend?: string
  recipeCount?: number
}

export const ChefCard: React.FC<RecommendChefPropsType> = (props) => {
  // const handleToggleVisibleState = (): void => {
  //   const [isVisible, setIsVisible] = useRecoilState(ModalVisibilityState)
  //   setIsVisible((prevIsVisible) => !prevIsVisible)
  // }

  return (
    <Pressable /*onPress={handleToggleVisibleState}*/>
      <Box maxW={props.imgSize.width}>
        <Image
          source={{
            // TODO:uriに変数が使えないので暫定対応
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt={`${props.title}の画像`}
          resizeMode="contain"
          rounded="2xl"
          w={props.imgSize.width}
          h={props.imgSize.height}
        />
        <Text
          position="absolute"
          bottom={2}
          left={2}
          numberOfLines={2}
          fontSize="md"
          fontWeight="bold"
          color="white"
        >
          {props.title}
        </Text>
      </Box>
    </Pressable>
  )
}
