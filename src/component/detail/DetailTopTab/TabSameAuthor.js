import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { memo } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { useSelector } from 'react-redux';

const TabSameAuthor = () => {
  let { data, loading } = useSelector(state => state.detail.info);

  const getName = useCallback((book) => {
    return book?.novel_name ?? '';
  }, []);

  const getGenre = useCallback((book) => {
    return book?.genre ?? '';
  }, []);

  const getRated = useCallback((book) => {
    return book?.rate ?? 0;
  }, []);

  const RenderItem = ({ item }) => {
    const imageUrl = item ? `https://media.novelextra.com/novel_150_223/${item.novel_id}.jpg` : '';

    return (
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: imageUrl,
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

        <Text />
      </View>
    );
  };

  const bookList = useMemo(() => {
    return (
      <FlatList
        data={data?.same_author ?? []}
        renderItem={({ item }) => <RenderItem item={item} />}
        numColumns={3}
      />
    );
  }, [data]);

  return (
    <View style={{ flex: 1 }}>
      {bookList}
    </View>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    height: 180,
  },
  bookName: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    width: '100%',
    marginTop: 8,
  },
  itemContainer: {
    width: '33%',
    padding: 8,
  },
  bookGenre: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
  },
  rating: {
    marginTop: 4,
  },
  ratingTitle: {
    color: 'black',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default memo(TabSameAuthor);
