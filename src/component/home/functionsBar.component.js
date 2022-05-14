import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

function FunctionsBar({ navigation }) {
    const onBtnPressed = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.bar}>
            <TouchableOpacity style={styles.btn}>
                <Icon name="th" size={25} color="#127BF4" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Icon name="download" size={25} color="#127BF4" />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.btn} 
                onPress={()=> {onBtnPressed("History")}}>
                <Icon name="history" size={25} color="#127BF4" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Icon name="user" size={25} color="#127BF4" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Icon name="ban" size={25} color="#127BF4" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: "#F0F0F0",
        height: 55,
        flexDirection: "row",
        paddingVertical: 15,
    },
    btn: {
        flex: 1,
        alignItems: 'center'
    },
});

export default FunctionsBar;