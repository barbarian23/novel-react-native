import React, {
  memo,
  useEffect,
} from 'react';
import { View, StyleSheet } from 'react-native';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { GET_CHAPTER_CONTENT } from '../../action/homeTab/detail.action';
import WebView from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

const getHtmlContent = (content) => `
  <html>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${content}
  </html>
`;

const ReadScreenComponent = () => {
  let dispatch = useDispatch();
  const route = useRoute();
  let { data, loading } = useSelector(state => state.detail.chapterContent);

  useEffect(() => {
    const { novel_id: id, chapter_id: chapter } = route.params;
    console.log('route::params', route.params);
    dispatch({ type: GET_CHAPTER_CONTENT.ACTION, novel_id: id, chapter_id: chapter });
  }, []);

  return (
    <View
      style={{ flex: 1 }}
    >
      {
        loading ? (
          <View style={styles.loading}>
            <Progress.Circle size={35} indeterminate={true} />
          </View>
        ) : (
          <WebView
            originWhitelist={['*']}
            source={{
              html: getHtmlContent(data?.chapterInfo?.chapter_content),
            }}
            containerStyle={{
              flex: 1,
            }}
          />
        )
      }

    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})
export default memo(ReadScreenComponent);
