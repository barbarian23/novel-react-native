import React from 'react';
import { View, StyleSheet} from "react-native";
import {Header, Genres, Types, NovelList} from '../../component/seeAll';

function SeeAll({navigation}) {

  return (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <Genres/>
        <Types />
        <NovelList />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flexDirection: "column",
      backgroundColor: "#FFF",
    }
});

export default SeeAll;