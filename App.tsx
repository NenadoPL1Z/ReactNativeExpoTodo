import React, {FC, useState} from 'react';
import {StyleSheet, View, Alert, Text} from 'react-native';
import Main from "./src/screens/Main";
import {ITodo} from "./src/Type/type";
import TodoScreen from "./src/screens/TodoScreen";
import Navbar from "./src/components/Navbar";

const App: FC = () => {

  const [todo, setTodo] = useState<ITodo[]>([])
  const [todoScreen, setTodoScreen] = useState('')

  const onSubmit = (str: string) => {
    const newTodo = {
      id: Date.now().toString(),
      title: str
    }
    setTodo(prev => [newTodo, ...prev])
  }

  const handleChangeTodo = (id: string) => {
    setTodo(prev => prev.filter(item => item.id != id))
  }

  const openTodo = (id: string) => {
    setTodoScreen(id)
  }

  const closeTodoScreen = () => {
    setTodoScreen('')
  }

  const generateNameNavigation = (id: string) => {
    const todoItem = todo.find(item => item.id == id)
    return todoItem
  }

  const onCompleted = (id: string) => {
    const newTodo = todo.map(item => {
      if (item.id == id) {
        if (!item.completed) item.completed = true
        else item.completed = false
      }
      return item
    })
    setTodo(newTodo)
    closeTodoScreen()
  }

  const onDelete = (id: string) => {
    Alert.alert(
      "Удаление элемента",
      "Точно хотите удалить этот пост?",
      [
        {
          text: "Да",
          onPress: () => {
            const newTodo = todo.filter(item => item.id != id)
            setTodo(newTodo)
            closeTodoScreen()
          },
          style: "cancel",
        },
        {
          text: "Нет",
          onPress: () => console.log('yes'),
          style: "cancel",
        },
      ],
      {cancelable: true}
    );
  }


  const navbarProps = {
    title: todoScreen ? `Todo Item` : `Todo List`,
    onClose: closeTodoScreen
  }

  return (
    <View style={styles.container}>
      <Navbar title={navbarProps.title} onClose={navbarProps.onClose}/>
      {todoScreen ?
        <TodoScreen
          onCompleted={onCompleted}
          onDelete={onDelete}
          todoItem={generateNameNavigation(todoScreen)}
        />
        :
        <Main
          todo={todo}
          onSubmit={onSubmit}
          handleChangeTodo={handleChangeTodo}
          openTodo={openTodo}
        />}
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  containerTodo: {
    paddingHorizontal: 20
  }
})
