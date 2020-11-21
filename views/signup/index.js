import React from "react"
import { StyleSheet, View, ScrollView } from "react-native";
import Input from "../../components/input";
import CustomButton from "../../components/button";

function SignUp() {
  return (
  
    <ScrollView contentContainerStyle={styles.main}>
      <View>
        <Input placeholder="  Enter Full Name" />
      </View>
      <View style={{marginTop:30}}>
        <Input placeholder="  Enter Email" />
      </View>
      <View style={{marginTop:30}}>
        <Input  secureTextEntry={true}  placeholder="  Enter Password" />
      </View>
      <View style={{marginTop:30}}>
      <CustomButton color='darkblue' text='Sign Up'/>
      </View>
    </ScrollView>
    
  );
}
const styles=StyleSheet.create({
main:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "#dedede"
  
}
})
export default SignUp;
