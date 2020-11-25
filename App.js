import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import LogIn from "./views/login/index";
import SignUp from "./views/signup/index";
import DashboardEmployee from './views/dashboardemployee'
import AddInfo from './views/addinfo'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "darkblue",
            },
            headerTintColor: "white",
          }}
          name="login"
          component={LogIn}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "darkblue",
            },
            headerTintColor: "white",
          }}
          name="signup"
          component={SignUp}
        />
         <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "darkblue",
            },
            headerTintColor: "white",
          }}
          name="dashboardemployee"
          component={DashboardEmployee}
        />
         <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "darkblue",
            },
            headerTintColor: "white",
          }}
          name="addinfo"
          component={AddInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
