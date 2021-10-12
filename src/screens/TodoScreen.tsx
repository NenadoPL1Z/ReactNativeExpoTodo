import React, {FC, useState} from 'react';
import {Button, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {ITodo} from "../Type/type";


const styles = StyleSheet.create({
  todoItemWrapper: {
    height: '85%',
  },
  todoItemTextBlock: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  todoItemTextInner: {
    elevation: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  todoItemText: {
    paddingTop: 10,
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  },
  buttonItem: {
    marginHorizontal: 10,
    marginVertical: 5
  }
})

interface ITodoScreen {
  onCompleted: (id: string) => void;
  onDelete: (id: string) => void
  todoItem: undefined | ITodo
}

const TodoScreen: FC<ITodoScreen> = ({onCompleted, onDelete, todoItem}) => {
  const [modal, setModal] = useState(false);
  return (

    <View style={styles.todoItemWrapper}>
      <View style={styles.todoItemTextBlock}>
        <View
          style={{
            ...styles.todoItemTextInner,
            backgroundColor: todoItem?.completed ? 'lightgreen' : 'lightgray'}}>
          <Text style={styles.todoItemText}>Title: {todoItem?.title}</Text>
          <Text style={styles.todoItemText}>ID: {todoItem?.id}</Text>
        </View>
      </View>
      {todoItem?.id &&
      <View>
        <View style={styles.buttonItem}>
          <Button
            title={todoItem.completed ? 'Remove complete' : 'Complete'}
            color={todoItem.completed ? 'blue' : 'green'}
            onPress={() => onCompleted(todoItem.id)}/>
        </View>
        <View style={styles.buttonItem}>
          <Button title={'Delete'} color={'red'} onPress={() => onDelete(todoItem.id)}/>
        </View>
      </View>}
    </View>
  );
};

export default TodoScreen;
