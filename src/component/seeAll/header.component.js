import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Header({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const onBackBtnClicked = () => {
    navigation.goBack();
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
          value={isSelected}
          onValueChange={setSelection}
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

