import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { registerUser } from "../../config/firebase";
import Input from "../../components/input";
import CustomButton from "../../components/button";

function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fullName = (enteredText) => {
    const name = enteredText.nativeEvent.text;
    setName(name);
  };
  const userEmail = (enteredText) => {
    const name = enteredText.nativeEvent.text;
    setEmail(name);
  };
  const userPass = (enteredText) => {
    const name = enteredText.nativeEvent.text;
    setPassword(name);
  };

  const signup = async function () {
    try {
      await registerUser(email, password);
      alert("User is registered Successfully!");
      navigation.navigate("login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View>
        <Input onChange={fullName} placeholder="  Enter Full Name" />
      </View>
      <View style={{ marginTop: 30 }}>
        <Input onChange={userEmail} placeholder="  Enter Email" />
      </View>
      <View style={{ marginTop: 30 }}>
        <Input
          onChange={userPass}
          secureTextEntry={true}
          placeholder="  Enter Password"
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <CustomButton onPress={signup} color="darkblue" text="Sign Up" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dedede",
  },
});
export default SignUp;
