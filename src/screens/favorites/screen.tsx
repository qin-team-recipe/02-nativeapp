import { View, Text, Button } from "native-base"

import { useAuth } from "../../components/Auth"

export const FavoriteScreen: React.FC = () => {
  const { signout } = useAuth()

  const handleSignout = () => {
    signout()
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Favorite Screen</Text>
      <Button onPress={handleSignout}>ログアウト</Button>
    </View>
  )
}
