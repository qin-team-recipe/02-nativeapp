import { Box, Text } from "native-base"
import ReactNativeModal from "react-native-modal"

import { useDummyModal } from "./useDummyModal"

export const DummyModal: React.FC = () => {
  const [isVisible] = useDummyModal()

  return (
    <ReactNativeModal isVisible={isVisible}>
      <Box>
        <Text>Boom!!</Text>
      </Box>
    </ReactNativeModal>
  )
}
