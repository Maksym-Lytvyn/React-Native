import React from "react";
import {StyleSheet, Text, View, Button} from 'react-native';

const PostsScreen = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Публікації</Text>
      <Button title="Повернутися" />
      <Button title="Іконка кубиків" />
      <Button title="+" />
      <Button title="Іконка чоловічка" />
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

export default PostsScreen;