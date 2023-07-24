import React from "react";
import {StyleSheet, Text, View } from 'react-native';

const CreatePostsScreen = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Створити допис</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default CreatePostsScreen;