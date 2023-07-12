// import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from "./Screens/LoginScreen";
// import PostsScreen from './Screens/PostsScreen';
import { StyleSheet, View, Text, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen /> */}
      <ScrollView>
        <LoginScreen />
      </ScrollView>

      {/* <PostsScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
