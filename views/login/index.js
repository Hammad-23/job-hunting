import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "../../components/input";
import CustomButton from "../../components/button";
export default function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Input placeholder="  Enter Email" />
      </View>
      <View style={{ marginTop: 50 }}>
        <Input secureTextEntry={true} placeholder="  Enter Passwor" />
      </View>
      <View style={{ marginTop: 50 }}>
        <CustomButton color='darkblue' text="LOG IN" />
      </View>
      <View  style={{ marginTop: 30 }}>
        <CustomButton onPress={()=>navigation.navigate('signup')} color='#2a2f47' text= 'Sign UP'/>
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
