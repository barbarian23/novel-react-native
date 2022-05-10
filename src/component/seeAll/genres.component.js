import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { SELECT_GENRE } from '../../action/seeAll/seeAll.action';

function Genres() {
    let { genres, selectedGenre } = useSelector(state => state.seeAll);
    let dispatch = useDispatch();

    const onGenreClicked = (genre) => {
        dispatch({ type: SELECT_GENRE, value: genre })
    }

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}>
                {genres.map((genre, index) => {
                    if (selectedGenre === genre) {
                        return <TouchableOpacity
                            key={index}
                            style={styles.selectedItem}>

                            <Text style={styles.selectedLabel}>
                                {genre}
                            </Text>
                        </TouchableOpacity>
                    } else {
                        return <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={() => onGenreClicked(genre)}>
                            <Text style={styles.label}>
                                {genre}
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

export default Genres;

