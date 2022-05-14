import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { SEARCH_KEYWORD_CHANGE } from '../../action/homeTab/homeTab.action';
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchBar({navigation}) {
    let { keyword } = useSelector(state => state.homeTab);
    let dispatch = useDispatch();

    const onKeywordChange = (text) => {
        dispatch({ type: SEARCH_KEYWORD_CHANGE, value: text })
    }

    const onHistoryBtnClicked = () => {
        navigation.navigate('History');
    }

    return (
        <View style={styles.searchBar}>
            <View style={styles.searchSection}>
                <View style={styles.serachIcon}>
                    <Icon name="search" size={20} color="gray" />
                </View>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={(text) => onKeywordChange(text)}
                    placeholder="Search novels"
                    placeholderTextColor="gray"
                    value={keyword}
                    
                >
                </TextInput>
            </View>

            <View style={styles.navSection}>
                <TouchableOpacity
                    style={styles.navBtn}
                    onPress={onHistoryBtnClicked}
                >
                    <Icon name="history" size={35} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "#15415C",
        height: 55,
        flexDirection: "row",
    },
    searchSection: {
        flex: 8,
        flexDirection: "row",
    },
    serachIcon: {
        flex: 1,
        maxWidth: 40,
        marginVertical: 5,
        marginLeft: 15,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: "#f0f0f0",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    searchInput: {
        flex: 10,
        height: 45,
        paddingVertical: 5,
        marginVertical: 5,
        marginRight: 10,
        backgroundColor: "white",
        color: "black",
        fontSize: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    navSection: {
        flex: 1,
    },
    navBtn: {
        marginVertical: 10,
        width: 40,
    }
});

export default SearchBar;