import React, {FC, useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";


const styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: 'row',
    alignItems: "center",
    paddingTop: 10,
    paddingVertical: 10,
    marginHorizontal: 5
  },
  todoInput: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ffff',
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 5,
    color: '#fff'
  },
})


interface IAddForm {
  onSubmit: (arg: string) => void
}

const AddForm: FC<IAddForm> = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [errorInput, setErrorInput] = useState(false)

  const handleSubmit = (str: string) => {
    if (inputValue.length) {
      setInputValue('')
      onSubmit(str)
      if (errorInput) setErrorInput(false)
    } else {
      Alert.alert('Больше символов 😡😡😡 !')
    }
  }

  return (
    <View style={styles.todoWrapper}>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={() => handleSubmit(inputValue)}
        autoCapitalize='none'
        style={styles.todoInput}/>
      <Button
        title={'Add todo'}
        onPress={() => handleSubmit(inputValue)}
      />
    </View>
  );
};

export default AddForm;
