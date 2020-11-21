import React from "react";
import { TouchableOpacity, Text } from "react-native";

function CustomButton(props) {
  return (
    <TouchableOpacity
    onPress={props.onPress}
      style={{
        backgroundColor: props.color,
        borderRadius: 15,
        width: 300,
        height: 50,
      }}
    >
      <Text
        style={{ color: "white", marginTop: 13, marginLeft: 120, fontSize: 20 }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
