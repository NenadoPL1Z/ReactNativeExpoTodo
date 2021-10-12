import React, {FC, useState} from 'react';
import {CheckBox, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ITodo} from "../Type/type";

interface ITodoItem {
  todo: ITodo
  removeTodo: (arg: string) => void
  openTodo: (id: string) => void
}

const styles = StyleSheet.create({
  todoItem: {
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})


const TodoItem: FC<ITodoItem> = ({todo, removeTodo, openTodo}) => {
  // const [checkbox, setCheckbox] = useState(false)

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => openTodo(todo.id)}
      onLongPress={() => removeTodo(todo.id)}>
      <View style={styles.todoItem}>
        <View style={{ backgroundColor: todo.completed ? 'green' : '#ffff', width: '100%', borderRadius: 5, paddingVertical: 2,
          paddingHorizontal: 4,}}>
          <Text>Todo: {todo.title}</Text>
        </View>
        {/*<CheckBox value={checkbox} onValueChange={setCheckbox}/>*/}
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
