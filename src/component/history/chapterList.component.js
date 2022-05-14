import React from 'react';
import { useSelector } from 'react-redux';
import { View, SafeAreaView, FlatList, Text, Image, StyleSheet } from "react-native";
import { date2daystr } from '../../service/util';

function ChapterList() {
    let { chapters } = useSelector(state => state.history);

    const renderChapter = (chapter) => {
        return (
            <View style={styles.novel}>
                <View style={styles.pictureSection}>
                    <Image style={styles.novelPicture}
                        source={{
                            uri: `https://media.novelextra.com/novel_150_223/${chapter.novel_id}.jpg`,
                        }}
                    />
                </View>

                <View style={styles.itemInfo}>
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
                        style={styles.chapter}
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
                    <React.Fragment key={index}>
                        {renderChapter(item)}
                    </React.Fragment>
                )}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    scrollView: {
        marginBottom: 310,
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
    info: {
        color: "#A8A8A8",
        fontSize: 14,
        marginVertical: 2,
    },
    chapter: {
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

