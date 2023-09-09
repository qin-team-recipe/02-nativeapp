import { Box, Center, HStack, Text, VStack } from "native-base"

import { Step } from "../../libs/APIFetch"

export type RecipeStepCardPropsType = {
  step: Step
}

export const RecipeStepCard: React.FC<RecipeStepCardPropsType> = (props) => {
  return (
    <HStack>
      <Box rounded="full" w={6} h={6} bgColor="red.400" m={2}>
        <Center>
          <Text color="white">{props.step.step_number}</Text>
        </Center>
      </Box>
      <VStack mt={1} px={1} w="full">
        <Text numberOfLines={2} fontWeight="bold">
          {props.step.title}
        </Text>
        <Text numberOfLines={1} fontSize="xs" color="gray.400">
          {props.step.description}
        </Text>
      </VStack>
    </HStack>
  )
}
