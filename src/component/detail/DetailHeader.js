import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ImageButton from '../Button/ImageButton';
import { useNavigation } from '@react-navigation/native';

const icClose = require('../../assets/ic_close.png');
const icShare = require('../../assets/ic_share.png');

const DetailHeader = (props) => {
  const {title} = props;
  const navigation = useNavigation();
  const onBackPress = () => {
    navigation?.goBack()
  }

  return (
    <View style={styles.container}>
      <ImageButton
        imgSource={icClose}
        onPress={onBackPress}
      />
      <Text>
        {title}
      </Text>
      <ImageButton
        imgSource={icShare}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 48,
  },
});

export default memo(DetailHeader);
