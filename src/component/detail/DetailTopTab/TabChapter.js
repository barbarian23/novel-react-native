import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';
import { memo } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_CHAPTER } from "../../../action/history/history.action";
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const TabChapter = () => {
  let { data, loading } = useSelector(state => state.detail.chapter);
  let { data: dataInfo } = useSelector(state => state.detail.info);
  let dispatch = useDispatch();
  const navigation = useNavigation();

  const RenderItem = ({ item }) => {
    const onChapterPress = () => {
      dispatch({
        type: ADD_CHAPTER,
        value: {
          novel_id: dataInfo.novel_id,
          novel_name: dataInfo.novel_name,
          totalChapter: dataInfo.totalChapter,
          crawler_date: dataInfo.crawler_date,
          chapter_id: item.chapter_id,
          chapter_name: item.chapter_name,
        }
      });
      navigation.navigate('ReadScreen', { novel_id: dataInfo.novel_id, chapter_id: item.chapter_id })
    }
    
    return (
      <TouchableOpacity
        onPress={onChapterPress}
        style={{
          paddingVertical: 16,
          paddingHorizontal: 8,
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: 14,
          }}
        >{item?.chapter_name ?? ''}</Text>
      </TouchableOpacity>
    );
  };

  const chapterList = useMemo(() => {
    return (
      <VirtualizedList
        data={data}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        getItemCount={(d) => d.length}
        getItem={(d, index) => d[index]}
      />
    );
  }, [data]);
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 200,
        }}>
          <Progress.Circle size={35} indeterminate={true} />
        </View>
      ) : chapterList}
    </View>
  );
};

export default memo(TabChapter);
