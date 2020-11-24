import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image, TouchableOpacity,Text,ImageBackground } from "react-native";
const image = { uri: 'https://reachttps://www.robertwalters.co.uk/content/dam/robert-walters/country/middle-east/images/webinars-banner/RW%20-%20Male%20Job%20Hunting%20Remotely%20-%20Colour%20Overlay%20Images%20-%20580x326px.jpgtjs.org/logo-og.pnghttps://st3.depositphotos.com/2898339/16096/i/1600/depositphotos_160964300-stock-photo-job-search-background.jpg' };
function DashboardEmployee() {
  return (
    <ScrollView>


      <View style={styles.header}>
      <ImageBackground source={image} style={styles.image}>
       
      
        {/* <Image
          style={styles.tinyLogo}
          source={require("../../assets/job-logo.png")}
        /> */}
        </ImageBackground>
      </View>
      <View style={styles.line}>
      <View >
        <TouchableOpacity style={styles.cards}>
            <Text style={styles.col}>Add Info</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 40}}>
        <TouchableOpacity style={styles.cards}>
            <Text style={styles.col}>Apply For job</Text>
        </TouchableOpacity>
      </View>
      </View>



    </ScrollView>
  );
}
export default DashboardEmployee;

const styles = StyleSheet.create({
  // main: {
  //   flex: 1,
  //   backgroundColor: "#dedede",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  tinyLogo: {
    width: 350,
    height: 350,
    marginLeft: 5,
    marginBottom: 50,
  },
  header: {
    // backgroundColor: "#ededed",
    height: 250,
  },
  cards:{
      height:100,
      width: 120,
      backgroundColor: '#294466',
      shadowColor: 'grey',
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      shadowOffset: {
        width: 0,
        height: 4
      },
    //   borderWidth: 1,
    //   borderColor:'darkblue',
      borderRadius:10
  },
  col:{
      color:'white',
      marginLeft:20,
      marginTop:20,
      fontSize:20
  },
  line:{
    //   display: 'flex',
    //   justifyContent: 'space-evenly',
    //   alignItems: 'center'
      marginTop:40,
      marginLeft:120
  },image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});