import React, {
  memo,
  useCallback,
  useMemo,
} from 'react';
import {
  View,
  StyleSheet,
  VirtualizedList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  Rating,
} from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

const HorizontalList = ({ data }) => {
  const navigation = useNavigation();
  const getName = useCallback((book) => {
    return book?.novel_name ?? '';
  }, []);

  const getGenre = useCallback((book) => {
    const displayGenre = (book?.novel_genres ?? [''])[0];
    return displayGenre ?? '';
  }, []);


  const getRated = useCallback(d => {
    const rated = d?.avgPointType2['$numberDecimal'] ?? 0;
    return (rated / 2).toFixed(2);
  }, []);


  const ListItem = (item) => {
    const onItemPress = () => {
      navigation.navigate('Detail', {novel_id: item.novel_id})
    }

    return (
      <TouchableOpacity style={styles.itemWrapContainer} onPress={onItemPress}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: `https://media.novelextra.com/novel_150_223/${item.novel_id}.jpg`,
            }}
            style={styles.itemImage}
          />
          <Text
            numberOfLines={2}
            style={styles.bookName}
          >
            {getName(item)}
          </Text>
          <Text style={styles.bookGenre}>
            {getGenre(item)}
          </Text>
          <View style={styles.ratingContainer}>
            <Rating
              type="custom"
              startingValue={getRated(item)}
              readonly
              isDisabled
              style={styles.rating}
              imageSize={12}
            />
            <Text style={styles.ratingTitle}>
              {getRated(item)}
            </Text>
          </View>
          <Text />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <VirtualizedList
      data={data}
      renderItem={({ item }) => ListItem(item)}
      getItemCount={(d) => d.length}
      getItem={(d, index) => d[index]}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  itemWrapContainer: {
    width: 90,
    marginLeft: 20,
  },
  itemImage: {
    width: 90,
    height: 125,
  },
  bookName: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    width: '100%',
    marginTop: 8,
  },
  itemContainer: {
  },
  bookGenre: {
    fontSize: 12,
    marginTop: 4,
  },
  rating: {
    marginTop: 4,
  },
  ratingTitle: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default memo(HorizontalList);
