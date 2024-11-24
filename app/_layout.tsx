import {Slot} from 'expo-router';
import {Platform, Text, View} from 'react-native';
import NavBar from "@/components/NavBar";
import {StyleSheet} from "react-native";
import {useEffect} from "react";
import Header from "@/components/Header";
import {backgroundColor} from "@/constants/styles/Colors";

export default function Layout() {
    return (
        <View style={styles.container}>
            {Platform.OS === "android" && <View style={{marginTop: 16,}}/>}
            <View style={styles.headerText}><Header/></View>
            <View style={styles.slot}><Slot/></View>
            <View style={styles.navBar}><NavBar /></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        // textAlign: 'center',
    },
    slot: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    navBar: {
        alignSelf: 'stretch',
    },
});
