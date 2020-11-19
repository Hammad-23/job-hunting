import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native';
import Input from './components/input'
export default function App() {
  return (
    
    <View style={styles.container}>
      
      <Input placeholder='  Enter Name'/>
      <Input placeholder='  Enter Name'/>
    
      <StatusBar style="auto" />
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
