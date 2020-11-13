import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ title, width = 90, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: width }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "snow",
    height: 80,
    borderRadius: 40,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Button;
