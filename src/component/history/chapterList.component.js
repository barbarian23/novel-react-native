import React from 'react';
import { useSelector } from 'react-redux';
import { View, SafeAreaView, TouchableOpacity, FlatList, Text, Image, StyleSheet } from "react-native";
import { date2daystr } from '../../service/util';

function ChapterList({ navigation }) {
    let { chapters } = useSelector(state => state.history);

    const onChapterPress = (item) => {
        navigation.navigate('ReadScreen', { novel_id: item.novel_id, chapter_id: item.chapter_id })
    }

    const renderChapter = (chapter) => {
        return (
            <View style={styles.chapter}>
                <View style={styles.pictureSection}>
                    <Image style={styles.novelPicture}
                        source={{
                            uri: `https://media.novelextra.com/novel_150_223/${chapter.novel_id}.jpg`,
                        }}
                    />
                </View>

                <View style={styles.novelInfo}>
                    <Text
                        style={styles.novelName}
                        numberOfLines={2}>
                        {chapter.novel_name}
                    </Text>
                    <Text
                        style={styles.info}>
                        {chapter.totalChapter} Chs | {date2daystr(new Date(chapter.crawler_date))}
                    </Text>
                    <Text
                        style={styles.chapterName}
                        numberOfLines={1}>
                        {chapter.chapter_name}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={chapters}
                renderItem={({ item, index, separators }) => (
                    <TouchableOpacity key={index} onPress={() => onChapterPress(item)}>
                        {renderChapter(item)}
                    </TouchableOpacity>
                )}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 105,
        minHeight: '100%',
    },
    chapter: {
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
        width: 100,
        resizeMode: 'stretch',
        borderRadius: 10,
    },
    novelInfo: {
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
    info: {
        color: "#A8A8A8",
        fontSize: 14,
        marginVertical: 2,
    },
    chapterName: {
        color: "#C6C6C6",
        fontSize: 14,
        marginVertical: 2,
        flexDirection: 'row',
    },
    loading: {
        // flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.9,
        backgroundColor: 'white',
        alignItems: "center",
        width: '100%'
    },
});

export default ChapterList;

