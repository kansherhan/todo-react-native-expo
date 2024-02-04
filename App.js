import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";
import { ToDo } from "./src/components/ToDo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodos = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (todoID) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoID));
  };

  return (
    <View>
      <Navbar title="Список задач: приложения для продуктивности" />

      <View style={styles.container}>
        <AddTodo onSubmit={addTodos} />

        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={({ item }) => <ToDo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
