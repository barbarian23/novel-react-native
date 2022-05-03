import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { SELECT_CATEGORY } from '../../action/seeAll/seeAll.action';

function Tags() {
    let { categories, selectedCategory } = useSelector(state => state.seeAll);
    let dispatch = useDispatch();

    const onCategoryClicked = (category) => {
        dispatch({ type: SELECT_CATEGORY, value: category })
    }

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}>
                {categories.map((category, index) => {
                    if (selectedCategory === category) {
                        return <TouchableOpacity
                            key={index}
                            style={styles.selectedItem}>

                            <Text style={styles.selectedLabel}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={() => onCategoryClicked(category)}>
                            <Text style={styles.label}>
                                {category}
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
        height: 40,
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

export default Tags;

