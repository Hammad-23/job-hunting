import React from "react";
import { TextInput } from "react-native";

function Input(props) {
  return (
    <>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        style={{
          height: 50,
          borderColor: "#524675",
          paddingLeft: 3,
          borderWidth: 2,
          minWidth: 300,
          maxWidth: 300,
          borderRadius: 15,
        }}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </>
  );
}
export default Input;
