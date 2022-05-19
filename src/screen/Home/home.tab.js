import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import SearchBar from '../../component/home/searchBar.component';
import FunctionsBar from '../../component/home/functionsBar.component';
import LastestRelease from '../../component/home/lastestRelease.component';
import Popular from '../../component/home/popular.component';
import HotListComponent from '../../component/home/hot.list.component';
import CompleteListComponent from '../../component/home/complete.list.component';
import NewListComponent from '../../component/home/new.list.component';

function HomeTab({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#15415C" />
      <SearchBar />
      <ScrollView>
        <FunctionsBar navigation={navigation} />
        <LastestRelease navigation={navigation}/>
        <NewListComponent />
        <Popular navigation={navigation}/>
        <CompleteListComponent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
    backgroundColor: 'white'
  },
});

export default HomeTab;
