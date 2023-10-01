import React from "react"
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native"

export type ActionButtonProps = TouchableOpacityProps & {
  title: string
  theme: "filled" | "outline"
  color?: "tomato" | "gray"
  size?: "sm" | "lg"
  onPress: () => void
}

export const ActionButton: React.FC<ActionButtonProps> = (props) => {
  const buttonStyle = [
    styles.button,
    styles[props.theme ?? "filled"],
    styles[props.color ?? "tomato"],
    styles[props.size ?? "sm"],
  ]

  return (
    <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
      <Text
        style={{
          color: props.theme === "filled" ? "white" : "tomato",
          textAlign: "center",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 10,
    textAlign: "center",
    width: "100%",
  },
  filled: {
    color: "white",
    borderWidth: 0,
    backgroundColor: "tomato",
  },
  outline: {
    backgroundColor: "transparent",
    borderColor: "tomato",
    borderWidth: 1,
  },
  gray: {
    borderColor: "gray",
  },
  tomato: {
    borderColor: "tomato",
  },
  sm: {
    height: 40,
    fontSize: 14,
  },
  lg: {
    height: 50,
    fontSize: 18,
  },
})
