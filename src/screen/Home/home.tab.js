import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import SearchBar from '../../component/home/searchBar.component';
import FunctionsBar from '../../component/home/functionsBar.component';
import LastestRelease from '../../component/home/lastestRelease.component';
import Popular from '../../component/home/popular.component';

function HomeTab({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#15415C" />
      <SearchBar />
      <ScrollView>
        <FunctionsBar navigation={navigation} />
        <LastestRelease />
        <Popular />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
  },
});

export default HomeTab;