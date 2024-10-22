import React from "react";
import {Text} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.flexRowJustBetween}>
                <Text>logo </Text>
                <Text>brix</Text>
            </View>
            <View style={styles.flexRowJustBetween}>
                <MaterialCommunityIcons name="bell" size={24} color="#99A1B3" style={styles.icon} />
                <MaterialCommunityIcons name="menu" size={24} color="#99A1B3" style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    flexRowJustBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        paddingHorizontal: 5,
    },
});