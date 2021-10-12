import React, {FC} from 'react';
import {Text, View, StyleSheet, Button, Pressable, Image} from "react-native";
import {ITodo} from "../Type/type";

interface INavbar {
  title: string,
  onClose: () => void
}

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 10,
    position: 'relative'
  },
  text: {
    color: '#ffff',
    fontSize: 20
  },
  backButton: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 11
  },
})


const Navbar: FC<INavbar> = ({title, onClose}) => {
  return (
    <View style={styles.navbar}>
      {title == 'Todo Item' &&
      <Pressable style={styles.backButton} onPress={() => onClose()}>
        <Image source={require('../image/back.png')}/>
      </Pressable>}
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  );
};

export default Navbar;
