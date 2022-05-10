import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar } from "react-native";
import SearchBar from '../../component/home/searchBar.component';
import LastestRelease from '../../component/home/lastestRelease.component';
import Popular from '../../component/home/popular.component';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

function HomeTab() {
  return (
    <View>
      <SearchBar />
      <ScrollView>
        <StatusBar backgroundColor="#15415C" />
        <LastestRelease />
        <Popular />
      </ScrollView>
    </View>
  );
}

export default HomeTab;