import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { loginUser } from "../../config/firebase";
import { StyleSheet, View } from "react-native";
import Input from "../../components/input";
import CustomButton from "../../components/button";

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const userEmail = (enteredText) => {
    const name = enteredText.nativeEvent.text;
    setEmail(name);
  };
  const userPass = (enteredText) => {
    const name = enteredText.nativeEvent.text;
    setPass(name);
  };

  const login = async function () {
    try {
      await loginUser(email, pass);
      alert("User Successfully Logged In!");
      // let userId = firebase.auth().currentUser.uid;
      // localStorage.setItem("ID", userId);

      // const take = localStorage.getItem("option");
      // if (take === "Company") {
      //   history.replace("/dashboardcompany");
      // } else {
      //   history.replace("/dashboardemployee");
      // }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Input onChange={userEmail} placeholder="  Enter Email" />
      </View>
      <View style={{ marginTop: 50 }}>
        <Input
          onChange={userPass}
          secureTextEntry={true}
          placeholder="  Enter Passwor"
        />
      </View>
      <View style={{ marginTop: 50 }}>
        <CustomButton onPress={login} color="darkblue" text="LOG IN" />
      </View>
      <View style={{ marginTop: 30 }}>
        <CustomButton
          onPress={() => navigation.navigate("signup")}
          color="#2a2f47"
          text="Sign UP"
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    alignItems: "center",
    justifyContent: "center",
  },
});
