import {Slot} from 'expo-router';
import {Platform, Text, View} from 'react-native';
import NavBar from "@/components/NavBar";
import {ThemedView} from "@/components/ThemedView";
import {StyleSheet} from "react-native";
import {useEffect} from "react";
import Header from "@/components/Header";

export default function Layout() {
    return (
        <ThemedView style={styles.container}>
            {Platform.OS === "android" && <View style={{marginTop: 16,}}/>}
            <View style={styles.headerText}><Header/></View>
            <View style={styles.slot}><Slot/></View>
            <View style={styles.navBar}><NavBar /></View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        textAlign: 'center',
    },
    slot: {
        flex: 1,
    },
    navBar: {
        alignSelf: 'stretch',
    },
});
