import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    navigation.navigate('Home', { email: email, password: password })
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.container}>
          <Image
            source={require("../images/PhotoBG.png")}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.form}>
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.inputsList}>
              <TextInput
                style={[styles.input]}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={[styles.input]}
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity style={styles.btnRegister} onPress={onPress}>
              <Text style={styles.textRegister}>
                Увійти
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              title="Go to Registration"
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.textLogin}>
                Немає акаунту?{" "}
                <Text style={styles.textLoginLink}>Зареєструватися</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },

  title: {
    fontWeight: 500,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 32,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderStyle: "solid",
    backgroundColor: "#F6F6F6",
    padding: 15,
    maxHeight: 50,
    marginBottom: 16,

    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },

  inputActive: {
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 8,
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    padding: 15,
    maxHeight: 50,
    marginBottom: 16,
    color: "#212121",

    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },

  inputsList: {
    marginBottom: 43,
  },

  btnRegister: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    height: 51,
    marginBottom: 16,
  },

  textRegister: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },

  textLogin: {
    color: "#1B4371",
    textAlign: "center",
    alignItems: "baseline",
    marginBottom: 45,
  },

  textLoginLink: {
    color: "#1B4371",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
