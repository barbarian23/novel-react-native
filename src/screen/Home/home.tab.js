import React from 'react';
import { ScrollView, StyleSheet, StatusBar } from "react-native";
import LastestRelease from '../../component/home/lastestRelease.component';
import SearchBar from '../../component/home/searchBar.component';

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
    <ScrollView>
      <StatusBar backgroundColor="#15415C" />
      <SearchBar />
      <LastestRelease />
    </ScrollView>
  );
}

export default HomeTab;