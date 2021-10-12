import React, {FC} from 'react';
import AddForm from "../components/AddForm";
import {FlatList, View, StyleSheet} from "react-native";
import TodoItem from "../components/TodoItem";
import {ITodo} from "../Type/type";

interface IMain {
  todo: ITodo[];
  onSubmit: (str: string) => void;
  handleChangeTodo: (id: string) => void;
  openTodo: (id: string) => void
}

const styles = StyleSheet.create({
  todoContainer: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 5
  }
})

const Todo: FC<IMain> = ({todo, onSubmit, handleChangeTodo, openTodo}) => {
  return (
    <View>
      <View>
        <AddForm onSubmit={onSubmit} />
        <View style={styles.todoContainer}>
          <FlatList
            keyExtractor={item => item.id}
            data={todo}
            renderItem={({item}) =>
              <TodoItem todo={item} removeTodo={handleChangeTodo} openTodo={openTodo}/>
            }/>
        </View>
      </View>
    </View>
  );
};

export default Todo;
