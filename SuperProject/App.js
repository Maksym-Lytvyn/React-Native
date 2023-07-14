// import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from "./Screens/LoginScreen";
// import PostsScreen from './Screens/PostsScreen';
import { StyleSheet, View, Image } from "react-native";

const image = {
  uri: "https://i.pinimg.com/564x/49/b3/05/49b305f30bb9c34b85cf3088ca24defb.jpg",
};

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <RegistrationScreen /> */}
    //   <ScrollView>
    //     <LoginScreen />
    //   </ScrollView>

    //   {/* <PostsScreen /> */}
    // </View>
    <View style={styles.container}>
      <Image source={image} style={styles.bg} />
      <LoginScreen />
      {/* <RegistrationScreen /> */}
    </View>
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
    left:0,
  },
});
