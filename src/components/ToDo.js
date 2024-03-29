import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export const ToDo = ({ todo, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={() => console.log("Pressed ", todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
