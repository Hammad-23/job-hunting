import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";

function DashboardEmployee() {
  return (
    <ScrollView>

      <View style={styles.header}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/job-logo.png")}
        />
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
    backgroundColor: "grey",
    height: 250,
  },
});
