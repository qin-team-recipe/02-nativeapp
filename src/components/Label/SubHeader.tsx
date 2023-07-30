import { HStack, Link, Text } from "native-base"
import React from "react"

type Props = {
  title: string
  link?: {
    href: string
    text: string
  }
}

export const SubHeader: React.FC<Props> = (props) => {
  return (
    <HStack justifyContent="space-between" alignItems="center" px={4}>
      <Text fontWeight="600" fontSize="xl">
        {props.title}
      </Text>
      {props.link && (
        <Link href={props.link?.href} isUnderlined={false}>
          <Text fontWeight="600" color="gray.400">
            {props.link?.text}
          </Text>
        </Link>
      )}
    </HStack>
  )
}
