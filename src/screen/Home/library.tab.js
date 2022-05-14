import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import SearchBar from '../../component/library/searchBar.component';

function LibraryTab() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView>
        <StatusBar backgroundColor="#15415C" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom : 60,
  },
});

export default LibraryTab;