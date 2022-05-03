import React from 'react';
import { View, StyleSheet} from "react-native";
import {Header, Categories, Tags, NovelList} from '../../component/seeAll';

function SeeAll({navigation}) {

  return (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <Categories/>
        <Tags />
        <NovelList />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        // flexDirection: "column",
      backgroundColor: "#FFF",
    }
});

export default SeeAll;