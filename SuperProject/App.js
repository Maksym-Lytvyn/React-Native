import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from "./Screens/LoginScreen";
import Home from './Screens/Home';
// import PostsScreen from './Screens/PostsScreen';
import { StyleSheet, View, Image } from "react-native";

// const image = {
//   uri: "https://i.pinimg.com/564x/49/b3/05/49b305f30bb9c34b85cf3088ca24defb.jpg",
// };

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} ></MainStack.Screen>
        <MainStack.Screen name="Login" component={LoginScreen} ></MainStack.Screen>
        <MainStack.Screen name="Home" component={Home} ></MainStack.Screen>
      </MainStack.Navigator>
      {/* <View style={styles.container}>
        <Image source={image} style={styles.bg} />
        <LoginScreen />
        <RegistrationScreen />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  bg: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
