import React, { useState } from "react";
import Input from '../../components/input'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";

function AddInfo() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.word}> Add Profile Info </Text>
      </View>
      <View style={styles.form}>
          <View>
             <Input placeholder='Enter your Full Name'/>
          </View>
          <View style={styles.gape}>
             <Input placeholder='Enter your Full Name'/>
          </View>
      </View>
    </ScrollView>
  );
}
export default AddInfo;

const styles = StyleSheet.create({
  
  header: {
    backgroundColor: "green",
    width: 500,
    height: 80,
  },
  word: {
    color: "white",
    marginLeft: 100,
    marginTop: 20,
    fontSize:20
  },
  gape: {
      marginTop:30
  },
  form:{
      display: 'flex',
      justifyContent: 'center',
      alignItems :'center',
      marginTop:50
  }
});
