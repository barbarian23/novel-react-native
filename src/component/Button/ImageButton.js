import React from 'react';
import {memo} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ImageButton = (props) => {
  const {imgSource, onPress, iconStyle = {}} = props;
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={styles.container}
    >
      <Image
        source={imgSource}
        style={{...styles.image, ...iconStyle}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default memo(ImageButton);
