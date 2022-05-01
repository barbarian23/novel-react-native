import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "#15415C",
        height: 40,
        flexDirection: "row",
    },
    searchSection:{
        flex: 8,
        flexDirection: "row",
    },
    serachIcon: {
        flex: 1,
        maxWidth: 30,
        marginVertical: 5,
        marginLeft: 15,
        paddingVertical: 4,
        paddingHorizontal: 5,
        backgroundColor: "#f0f0f0",
    },
    searchInput: {
        flex: 10,
        height: 30,
        paddingVertical: 5,
        marginVertical: 5,
        marginRight: 10,
        backgroundColor: "white",
        color: "black"
    },
    navSection: {
        flex: 1,
    },
    navBtn: {
        margin: 5,
        width: 30,
    }
});

function SearchBar() {
    const [text, onChangeText] = useState("");

    return (
        <View style={styles.searchBar}>
            <View style={styles.searchSection}> 
                <View style={styles.serachIcon}>
                    <Icon name="search" size={20} color="gray"/>
                </View>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={onChangeText}
                    placeholder="Search novels"
                    placeholderTextColor="gray"
                    value={text}
                >
                </TextInput>
            </View>
            
            <View style={styles.navSection}>
                <TouchableOpacity
                    style={styles.navBtn}
                >
                    <Icon name="th" size={25} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SearchBar;