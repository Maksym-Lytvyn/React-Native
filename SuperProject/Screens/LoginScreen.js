import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const image = {
  uri: "https://i.pinimg.com/564x/49/b3/05/49b305f30bb9c34b85cf3088ca24defb.jpg",
};

const LoginScreen = () => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      enabled
      // behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -130 : -90}
    >
      <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <View style={styles.wrapper}>
            <Text style={styles.text}>Увійти</Text>

            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Адреса електронної пошти"
                autoFocus
                style={styles.input}
              />
            </View>

            <View style={styles.inputWrapper}>
              <TextInput placeholder="Пароль" style={styles.input} autoFocus />
            </View>

            <View style={styles.buttonWrapper}>
              <Button title="Увійти" style={styles.button} />
            </View>

            <Button title="Немає акаунту? Зареєструватися" />
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    backgroundColor: "#E8E8E8",
    width: 343,
    height: 50,
    marginTop: 5,
    borderRadius: 3,
    marginLeft: 20,
    marginRight: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    width: 375,
    height: 812,
  },
  wrapper: {
    backgroundColor: "white",
    borderRadius: 25,
    height: 489,
    marginTop: 320,
  },
  text: {
    color: "black",
    marginTop: 50,
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: 343,
    padding: 25,
  },
  buttonWrapper: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    color: "white",
    padding: 16,
    width: 120,
    height: 19,
  },
});

export default LoginScreen;
