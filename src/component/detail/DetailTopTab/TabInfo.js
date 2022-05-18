import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { memo } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { useSelector } from 'react-redux';
import * as Progress from 'react-native-progress';

const TabInfo = () => {
  let { data, loading } = useSelector(state => state.detail.info);
  const getAuthorName = useCallback(d => {
    const authorAr = d?.novel_author ?? [''];
    return authorAr[0];
  }, []);

  const getGenre = useCallback(d => {
    const genreArr = d?.novel_genres ?? [''];
    return genreArr[0];
  }, []);

  const getStatus = useCallback(d => {
    return d
      ? `${d.novel_source ?? ''} | ${d.totalChapter ? `${d.totalChapter} Chs` : ''} | ${
        d.view ? `${d.view} Views` : ''
      }`
      : '';
  }, []);

  const getRated = useCallback(d => {
    const rated = d?.avgPointType2['$numberDecimal'] ?? 0;
    return (rated / 2).toFixed(2);
  }, []);

  const getTotalRatedText = useCallback(d => {
    return d ? `${getRated(d) ?? ''} (${d.voteCountType2} ratings)` : '';
  }, []);

  const basicInfo = useMemo(() => {
    const imageUrl = data ? `https://media.novelextra.com/novel_150_223/${data.novel_id}.jpg` : '';
    return (
      <View style={styles.basicInfoContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{
            width: 180,
            height: 240,
            marginTop: 16,
            marginBottom: 16,
          }}
        />
        <Text style={styles.authorName}>{getAuthorName(data)}</Text>
        <Text style={styles.genre}>{getGenre(data)}</Text>
        <Text style={styles.status}>{getStatus(data)}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            type="custom"
            startingValue={getRated(data)}
            readonly
            isDisabled
            style={styles.rating}
            imageSize={30}
            tintColor={'white'}
            ratingBackgroundColor={'grey'}
          />
          <Text style={styles.ratingTitle}>{getTotalRatedText(data)}</Text>
        </View>
      </View>
    );
  }, [data]);

  const getAlternativeNames = useCallback((d) => {
    const name = !d?.novel_other_name ? d?.novel_name : '';
    console.log('name::', name, d);
    return `Alternative names: ${name}`;
  }, []);

  const alternativeNameView = useMemo(() => {
    return (
      <View style={styles.alternativeNameContainer}>
        <Text style={styles.alternativeNames}>
          {getAlternativeNames(data)}
        </Text>
      </View>
    );
  }, [data]);

  const getSummary = useCallback((d) => {
    return d ? d.novel_desc : '';
  }, []);

  const CategoryView = useMemo(() => {
    const genres = data?.novel_genres ?? [];
    return (
      <View style={styles.genreItemContainer}>
        {genres.map((item) => {
          return (
            <TouchableOpacity>
              <Text style={styles.genreItem}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }, [data]);

  const summaryView = useMemo(() => {
    return (
      <View style={styles.alternativeNameContainer}>
        <Text style={styles.alternativeNames}>
          {getSummary(data)}
        </Text>
      </View>
    );
  }, [data]);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      {loading ? (
        <View style={styles.loading}>
          <Progress.Circle size={35} indeterminate={true} />
        </View>
      ) : (
        <View>
          {basicInfo}
          {alternativeNameView}
          {summaryView}
          {CategoryView}
        </View>
      )}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  rating: {
    marginTop: 4,
  },
  basicInfoContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 12,
    paddingBottom: 16,
  },
  authorName: {
    color: 'black',
    fontSize: 14,
  },
  genre: {
    fontSize: 14,
    color: 'grey',
    marginTop: 8,
  },
  status: {
    fontSize: 14,
    color: 'grey',
    marginTop: 4,
  },
  ratingTitle: {
    fontSize: 14,
    color: 'black',
    marginTop: 4,
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alternativeNames: {
    fontSize: 14,
    color: 'black',
  },
  alternativeNameContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 12,
  },
  genreItem: {
    borderRadius: 12,
    height: 24,
    borderWidth: 1,
    paddingHorizontal: 8,
    textAlign: 'center',
    borderColor: 'blue',
    marginHorizontal: 4,
    marginBottom: 4,
    color: 'blue',
  },
  genreItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
});

export default memo(TabInfo);
