import React from 'react';
import { View, StyleSheet } from "react-native";
import { Header, ChapterList } from '../../component/history';

function History({ navigation }) {

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ChapterList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#FFF",
  }
});

export default History;