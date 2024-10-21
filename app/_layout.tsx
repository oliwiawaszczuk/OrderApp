import {Slot} from 'expo-router';
import {Text, View} from 'react-native';
import NavBar from "@/components/NavBar";
import {ThemedView} from "@/components/ThemedView";
import {StyleSheet} from "react-native";
import {useEffect} from "react";

export default function Layout() {
    return (
        <ThemedView style={styles.container}>
            <Text style={styles.headerText}>INDEX</Text>
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
        marginVertical: 20,
        textAlign: 'center',
    },
    slot: {
        flex: 1,
    },
    navBar: {
        alignSelf: 'stretch',
    },
});
