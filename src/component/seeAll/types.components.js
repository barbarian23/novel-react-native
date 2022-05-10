import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { SELECT_TYPE } from '../../action/seeAll/seeAll.action';

function Types() {
    let { types, selectedType } = useSelector(state => state.seeAll);
    let dispatch = useDispatch();

    const onTypeClicked = (tag) => {
        dispatch({ type: SELECT_TYPE, value: tag })
    }

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}>
                {types.map((tag, index) => {
                    if (selectedType === tag) {
                        return <TouchableOpacity
                            key={index}
                            style={styles.selectedItem}>
                            <Text style={styles.selectedLabel}>
                                {tag}
                            </Text>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={()=> onTypeClicked(tag)}>
                            <Text style={styles.label}>
                                {tag}
                            </Text>
                        </TouchableOpacity>
                    }

                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingVertical: 10,
    },
    scrollView: {

    },
    item: {
        height: 30,
        marginHorizontal: 2,
        paddingHorizontal: 5,
        paddingTop: 3,

    },
    label: {
        fontSize: 16,
        color: 'black'
    },
    selectedItem: {
        backgroundColor: "#37A7F8",
        height: 30,
        marginHorizontal: 2,
        paddingHorizontal: 5,
        paddingTop: 3,
    },
    selectedLabel: {
        fontSize: 16,
        color: '#FFF'
    }
});

export default Types;

