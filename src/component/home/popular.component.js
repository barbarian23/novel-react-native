import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    GET_POPULAR_NOVELS
} from "../../action/homeTab/homeTab.action";
import {
    ADD_CHAPTER
} from "../../action/history/history.action";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import { Link } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { date2daystr } from '../../service/util';

function Popular({ navigation }) {
    let { popularNovels, isLoadingPopularNovels } = useSelector(state => state.homeTab);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: GET_POPULAR_NOVELS });
    }, []);

    const onNovelPressed = (novel) => {
        navigation.navigate('Detail', { novel_id: novel.novel_id })

        // dispatch({
        //     type: ADD_CHAPTER,
        //     value: {
        //         novel_id: novel.novel_id,
        //         novel_name: novel.novel_name,
        //         totalChapter: novel.totalChapter,
        //         crawler_date: novel.crawler_date,
        //         chapter_id: novel.recentChapter.chapter_id,
        //         chapter_name: novel.recentChapter.chapter_name,
        //     }
        // });
    }

    const renderItem = (item) => {
        return (<View style={styles.item}>
            <View style={styles.pictureSection}>
                <Image style={styles.novelPicture}
                    source={{
                        uri: `https://media.novelextra.com/novel_150_223/${item.novel_id}.jpg`,
                    }}
                />
            </View>

            <View style={styles.itemInfo}>
                <Text
                    style={styles.novelName}
                    numberOfLines={1}>
                    {item.novel_name}
                </Text>
                <Text
                    style={styles.chapterTitle}
                    numberOfLines={1}>
                    {item.recentChapter ? item.recentChapter.chapter_name : ''}
                </Text>
                <Text style={styles.updatedTime}>{date2daystr(new Date(item.crawler_date))}</Text>
            </View>
        </View>);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Popular</Text>
                </View>
                <View style={styles.linkSection}>
                    <Link style={styles.link} to={{ screen: 'SeeAll' }}>See All</Link>
                </View>
            </View>

            {isLoadingPopularNovels
                ? <View style={styles.loading}>
                    <Progress.Circle size={35} indeterminate={true} />
                </View>
                : <View style={styles.listView}>
                    {popularNovels.map((item, index) => {
                        return <TouchableOpacity key={index} onPress={() => onNovelPressed(item)}>
                            {renderItem(item)}
                        </TouchableOpacity>
                    })}
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        paddingTop: 15,
        paddingBottom: 5,
    },
    titleSection: {
        flex: 2,
    },
    title: {
        color: "black",
        fontSize: 20,
        fontWeight: '600',
    },
    linkSection: {
        flex: 1,
    },
    link: {
        textAlign: "right",
        color: '#6EADD3',
        paddingTop: 5,
        fontSize: 16,
        fontWeight: '400',
    },
    listView: {

    },
    loading: {
        alignItems: "center",
    },
    item: {
        flexDirection: "row",
        marginVertical: 8,
    },
    pictureSection: {
        flex: 1,
        maxWidth: 70,
    },
    novelPicture: {
        height: 90,
        width: 70,
        resizeMode: 'stretch',
    },
    itemInfo: {
        flex: 5,
        flexDirection: "column",
        paddingLeft: 15,
        paddingRight: 5,
    },
    novelName: {
        color: "black",
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 2,
    },
    chapterTitle: {
        color: "#A8A8A8",
        fontSize: 15,
        marginVertical: 2,
    },
    updatedTime: {
        color: "#C6C6C6",
        fontSize: 15,
        marginVertical: 2,
    }
});


export default Popular;