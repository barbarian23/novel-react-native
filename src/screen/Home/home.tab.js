import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import SearchBar from '../../component/home/searchBar.component';
import LastestRelease from '../../component/home/lastestRelease.component';
import Popular from '../../component/home/popular.component';

function HomeTab() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView>
        <StatusBar backgroundColor="#15415C" />
        <LastestRelease />
        <Popular />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom : 60,
  },
});

export default HomeTab;