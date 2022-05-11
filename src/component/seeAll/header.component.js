import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SHOW_COMPLETED_NOVELS_ONLY,
  HIDE_COMPLETED_NOVELS_ONLY,
  TOGGLE_COMPLETED_NOVELS_ONLY,
} from "../../action/seeAll/seeAll.action";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Header({ navigation }) {
  let { isShowCompletedNovelOnly } = useSelector(state => state.seeAll);
  let dispatch = useDispatch();

  const onBackBtnClicked = () => {
    navigation.goBack();
  }

  const onCheckboxClicked = () => {
    dispatch({ type: TOGGLE_COMPLETED_NOVELS_ONLY });
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftBtnSection}>
        <TouchableOpacity style={styles.leftBtn} onPress={onBackBtnClicked}>
          <Icon name="arrow-left" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.showCompleteSection}>
        <CheckBox
          value={isShowCompletedNovelOnly}
          onValueChange={onCheckboxClicked}
          style={styles.checkBox}
        />
        <Text style={styles.label}>Show completed novels only</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: "#15415C",
    flexDirection: "row",
  },
  leftBtnSection: {
    flex: 2,
  },
  leftBtn: {
    paddingVertical: 10,
    paddingLeft: 20,
  },
  showCompleteSection: {
    flex: 4,
    flexDirection: "row",
    paddingTop: 10,
  },
  checkBox: {
    // color: "#FFF",
    borderColor: "#FFF"
  },
  label: {
    fontSize: 16,
    color: "#FFF",
    paddingTop: 5,
  }

});

export default Header;

