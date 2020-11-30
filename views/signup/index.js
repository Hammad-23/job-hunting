import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image,Picker,Text } from "react-native";
import { registerUser } from "../../config/firebase";
import Input from "../../components/input";
import CustomButton from "../../components/button";
import { AsyncStorage } from 'react-native';

function SignUp({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("Company");
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
  console.log(selectedValue)
  AsyncStorage.setItem('option',selectedValue)


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
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/job-logo.png")}
        />
      </View>
      <View>
        <Input onChange={fullName} placeholder="  Enter Full Name" />
      </View>
      <View style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center'}}>
      <Text>Select a Role:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150, borderWidth: 1, borderColor: 'blue' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Company" value="Company" />
        <Picker.Item label="Employee" value="Employee" />
      </Picker>

      {/* <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        /> */}

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
  tinyLogo: {
    width: 250,
    height: 250,
  },
});
export default SignUp;
