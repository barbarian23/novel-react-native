import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { memo } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabInfo from './TabInfo';
import TabChapter from './TabChapter';
import TabSameAuthor from './TabSameAuthor';
import TabComment from './TabComment';
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import ImageButton from '../../Button/ImageButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  GET_NOVEL_CHAPTER,
  GET_NOVEL_INFO,
} from '../../../action/homeTab/detail.action';
import {
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;


const Tab = createMaterialTopTabNavigator();

const DetailTabContainer = () => {
  const route = useRoute();
  let dispatch = useDispatch();
  const navigation = useNavigation();

  let { chapters } = useSelector(state => state.history);
  let { chapter } = useSelector(state => state.detail);

  useEffect(() => {
    const { novel_id: id } = route.params;
    dispatch({ type: GET_NOVEL_INFO.ACTION, value: id });
    dispatch({ type: GET_NOVEL_CHAPTER.ACTION, value: id });
  }, []);

  const tabBarLabelComponent = (focused, color, label) => {
    return (
      <Text
        style={{
          color: focused ? 'blue' : 'grey',
        }}
        numberOfLines={1}>
        {label}
      </Text>
    );
  };

  const getCurrentHistoryChapter = () => {
    const { novel_id: id } = route.params;
    console.log("novel_id",route.params.novel_id);
    if (chapters == null) {
      navigation.navigate('ReadScreen', { novel_id: id, chapter_id: chapter.data[0].chapter_id })
    } else {
      const currentHistoryChapter = chapters.filter(item => item.novel_id === id);

      if (currentHistoryChapter.length == 0) {
        navigation.navigate('ReadScreen', { novel_id: id, chapter_id: chapter.data[0].chapter_id })
      } else {
        navigation.navigate('ReadScreen', { novel_id: id, chapter_id: currentHistoryChapter[0].chapter_id })
      }
    }
  }

  const bottomView = useMemo(() => {
    return (
      <View style={{ flexDirection: 'row', height: 60, backgroundColor: 'black' }}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <ImageButton
            imgSource={require('../../../assets/ic_download.png')}
            iconStyle={{ tintColor: 'rgb(17, 107, 204)', width: 36, height: 36 }}
          />
          <Text style={{ color: 'rgb(17, 107, 204)', fontWeight: 'bold' }} numberOfLines={1}>
            {'Download'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: 'rgb(17, 107, 204)',
          }}
          onPress={getCurrentHistoryChapter}
        >
          <ImageButton
            imgSource={require('../../../assets/ic_read.png')}
            iconStyle={{ tintColor: 'white', width: 36, height: 36 }}
          />
          <Text style={{ color: 'white', fontWeight: 'bold' }} numberOfLines={1}>
            {'Read'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <ImageButton
            imgSource={require('../../../assets/ic_star.png')}
            iconStyle={{ tintColor: 'rgb(17, 107, 204)', width: 36, height: 36 }}
          />
          <Text style={{ color: 'rgb(17, 107, 204)', fontWeight: 'bold' }} numberOfLines={1}>
            {'In Library'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }, [chapter]);

  const tabNavigator = useMemo(() => {
    return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: 'white' },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: ['grey'],
          }}
        >
          <Tab.Screen
            name="Info"
            component={TabInfo}
            options={{
              tabBarLabel: ({ focused, color }) =>
                tabBarLabelComponent(focused, color, 'Info'),
            }}
          />
          <Tab.Screen
            name="Chapter"
            component={TabChapter}
            options={{
              tabBarLabel: ({ focused, color }) =>
                tabBarLabelComponent(focused, color, 'Chapter'),
            }}
          />
          <Tab.Screen
            name="SameAuthor"
            component={TabSameAuthor}
            options={{
              tabBarLabel: ({ focused, color }) =>
                tabBarLabelComponent(focused, color, 'Same Author'),
            }}
          />
          <Tab.Screen
            name="Comments"
            component={TabComment}
            options={{
              tabBarLabel: ({ focused, color }) =>
                tabBarLabelComponent(focused, color, 'Comments'),
            }}
          />
        </Tab.Navigator>
      </View>

    );
  }, []);


  return (
    <View style={{ flex: 1 }}>
      {tabNavigator}
      {bottomView}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    paddingBottom: 26,
  },
  headerBackground: {
    height: 200,
    width: 80,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
  },
  actionHeader: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default memo(DetailTabContainer);
