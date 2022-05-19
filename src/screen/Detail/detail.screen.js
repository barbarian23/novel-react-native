import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import DetailHeader from '../../component/detail/DetailHeader';
import DetailTabContainer from '../../component/detail/DetailTopTab/DetailTabContainer';

function Detail() {
  let { data } = useSelector(state => state.detail.info);
  return (
    <View
      style={styles.container}
    >
      <DetailHeader
        title={!data?.novel_other_name ? data?.novel_name : ''}
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
