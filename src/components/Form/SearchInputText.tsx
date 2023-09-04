import { AntDesign } from "@expo/vector-icons"
import { Icon, Input, Spinner } from "native-base"
import React, { useEffect, useState } from "react"

export type SearchInputTextProps = {
  onSubmitEditing: (inputText: string) => void
  initialSearchText?: string
  placeholder?: string
  editWaitingMillisecond?: number
}

export const SearchInputText: React.FC<SearchInputTextProps> = (props) => {
  const [inputText, setInputText] = useState<string>(
    props.initialSearchText ?? ""
  )
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>()

  // 一定時間入力がなければ編集確定（デフォルト1秒）
  const EDIT_WAITING_MILLISEC = props.editWaitingMillisecond ?? 1000
  const startTimer = () => {
    clearTimeout(timeoutId)
    const newTimeoutId = setTimeout(() => {
      setIsEditing(false)
      props.onSubmitEditing(inputText)
    }, EDIT_WAITING_MILLISEC)
    setTimeoutId(newTimeoutId)
    return () => clearTimeout(newTimeoutId)
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearTimeout(timeoutId)
    }
  }, [inputText])

  const handleInputChange = (text: string) => {
    setIsEditing(true)
    setInputText(text)
  }
  const handleInputBlur = () => {
    setIsEditing(false)
    clearTimeout(timeoutId)
    props.onSubmitEditing(inputText)
  }
  return (
    <Input
      variant="filled"
      ml={2}
      InputLeftElement={
        <Icon
          as={<AntDesign name="search1" />}
          size="5"
          ml="2"
          color="muted.400"
        />
      }
      onChangeText={handleInputChange}
      onBlur={handleInputBlur}
      value={inputText}
      placeholder={props.placeholder ?? "シェフやレシピを検索"}
      fontSize={"sm"}
      InputRightElement={<>{isEditing && <Spinner mr="2" />}</>}
    />
  )
}
