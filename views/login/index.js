// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { loginUser } from "../../config/firebase";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import Input from "../../components/input";
import CustomButton from "../../components/button";
import { AsyncStorage } from 'react-native';

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
      navigation.navigate('dashboardemployee')
      let userId = firebase.auth().currentUser.uid;
      AsyncStorage.setItem('ID', userId)
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
    <ScrollView contentContainerStyle={styles.main}>
       <View>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/job-logo.png')}
      />
      </View>
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

      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#dedede",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 250,
    height: 250,
  }
});
