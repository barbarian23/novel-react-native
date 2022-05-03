import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import { Link } from '@react-navigation/native';

function LastestRelease() {
    let { lastestReleaseItems } = useSelector(state => state.homeTab);
    
    const renderItem = (item) => {
        return (<View style={styles.item}>
            <View style={styles.pictureSection}>
                <Image style={styles.novelPicture}
                    source={{
                        uri: item.novel_picture,
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
                    {item.chap_title}
                </Text>
                <Text style={styles.updatedTime}>{item.uploaded_time}</Text>
            </View>
        </View>);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Lastest Release</Text>
                </View>
                <View style={styles.linkSection}>
                    <Link style={styles.link} to={{ screen: 'SeeAll' }}>See All</Link>
                </View>
            </View>

            <View style={styles.listView}>
                {lastestReleaseItems.map((item, index)=> {
                    return <React.Fragment key={index}>
                        {renderItem(item)}
                    </React.Fragment>
                })}
            </View>
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


export default LastestRelease;