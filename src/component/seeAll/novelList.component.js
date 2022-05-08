import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import { Rating } from 'react-native-ratings';

function NovelList() {
    let { novels } = useSelector(state => state.seeAll);

    const renderNovel = (novel) => {
        return (
            <View style={styles.novel}>
                <View style={styles.pictureSection}>
                    <Image style={styles.novelPicture}
                        source={{
                            uri: novel.picture,
                        }}
                    />
                </View>

                <View style={styles.itemInfo}>
                    <Text
                        style={styles.novelName}
                        numberOfLines={2}>
                        {novel.name}
                    </Text>
                    <Text
                        style={styles.novelAuthor}
                        numberOfLines={1}>
                        {novel.author} | {novel.category}
                    </Text>
                    <View style={styles.novelTags}>
                        {novel.tags.map((tag, index) => {
                            return (
                                <View
                                    style={styles.tag}
                                    key={index}>
                                    <Text style={styles.tagLabel}>{tag}</Text>
                                </View>
                            )
                        })}

                    </View>
                    <View style={styles.novelRating}>
                        <Rating
                            type='star'
                            ratingBackgroundColor="#FFF"
                            ratingCount={5}
                            imageSize={17}
                            readonly
                            startingValue={novel.rating}
                            onFinishRating={()=>{}}
                        />
                        <Text style={styles.ratingLabel}>
                            {novel.rating}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {novels.map((novel, index) => {
                    return <React.Fragment key={index}>
                        {renderNovel(novel)}
                    </React.Fragment>
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    novel: {
        flexDirection: "row",
        marginVertical: 5,
        borderBottomColor: "#EAEAEA",
        borderBottomWidth: 1,
    },
    pictureSection: {
        flex: 1,
        maxWidth: 110,
        paddingVertical: 5,
    },
    novelPicture: {
        height: 140,
        width: 110,
        resizeMode: 'stretch',
    },
    itemInfo: {
        flex: 1,
        flexDirection: "column",
        paddingLeft: 15,
        paddingRight: 5,
    },
    novelName: {
        color: "black",
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 2,
    },
    novelAuthor: {
        color: "#A8A8A8",
        fontSize: 14,
        marginVertical: 2,
    },
    novelTags: {
        color: "#C6C6C6",
        fontSize: 14,
        marginVertical: 2,
        flexDirection: 'row',
    },
    tag: {
        height: 30,
        marginHorizontal: 5,
        paddingTop: 2,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: "#93BFD4",
        borderRadius: 15,
    },
    tagLabel: {
        color: '#93BFD4',
        fontWeight: '400'
    },
    novelRating: {
        marginVertical: 5,
        alignItems: 'baseline',
        flexDirection: "row",
    },
    ratingLabel: {
        color: 'black',
        fontSize: 14,
        marginHorizontal: 5,
        // top: -5,
    },
});

export default NovelList;

