import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (!value.trim()) {
      Alert.alert("Ошибка", "Названия задачи не может быть пустым!");
      return;
    }

    onSubmit(value);
    setValue("");
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Названия задачи..."
        autoCorrect={false}
        autoCapitalize="sentences"
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
