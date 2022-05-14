import React from 'react';
import { useDispatch } from 'react-redux';
import {
  DELETE_ALL_CHAPTERS
} from "../../action/history/history.action";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function Header({ navigation }) {
  let dispatch = useDispatch();

  const onBackBtnPressed = () => {
    navigation.goBack();
  }

  const onDeleteBtnPressed = () => {
    dispatch({ type: DELETE_ALL_CHAPTERS });
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.leftBtn} onPress={onBackBtnPressed}>
          <Icon name="arrow-left" size={25} color="#FFF"/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightBtn} onPress={onDeleteBtnPressed}>
          <Icon name="trash-o" size={25} color="#FFF" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: "#15415C",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  leftBtn: {
    flex: 1,
    paddingVertical: 15,
    alignItems:'flex-start',
  },
  rightBtn: {
    flex: 1,
    paddingVertical: 15,
    alignItems:'flex-end',
  }
 

});

export default Header;

