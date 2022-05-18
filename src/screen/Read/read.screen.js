import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ReadScreenComponent from '../../component/read.screen/read.screen.component';


const ReadScreen = () => {
  return (
    <View style={styles.container}>
      <ReadScreenComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ReadScreen;
