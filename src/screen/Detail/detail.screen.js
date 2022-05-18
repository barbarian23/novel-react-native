import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import DetailHeader from '../../component/detail/DetailHeader';
import DetailTabContainer from '../../component/detail/DetailTopTab/DetailTabContainer';

function Detail() {
  return (
    <View
      style={styles.container}
    >
      <DetailHeader
        title={'Story name'}
      />
      <DetailTabContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default Detail;
