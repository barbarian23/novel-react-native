import React, {
  memo,
  useEffect,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HorizontalList from './horizontal.list.component';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  GET_COMPLETE_NOVEL,
} from '../../action/homeTab/homeTab.action';

const CompleteListComponent = () => {
  let dispatch = useDispatch();
  let { completedNovels, isLoadingCompleteNovels } = useSelector(state => state.homeTab);
  useEffect(() => {
    dispatch({ type: GET_COMPLETE_NOVEL.ACTION });
  }, []);

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Completed</Text>
      <HorizontalList
        data={completedNovels}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  container: {
    marginTop: 20,
  },
});

export default memo(CompleteListComponent);
