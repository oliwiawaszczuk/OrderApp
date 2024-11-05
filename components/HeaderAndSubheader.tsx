import React from 'react';
import {View, Text} from "react-native";
import {StyleSheet} from "react-native";
import {primary} from "@/constants/Colors";

export default function HeaderAndSubheader({header, subheader}: {header: string, subheader: string}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{header}</Text>
            <Text style={styles.subText}>{subheader}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        color: primary,
        fontWeight: "bold",
        textAlign: 'center',
    },
    subText: {
        textAlign: 'center',
        color: primary,
        fontSize: 16,
        marginTop: 8,
    },
});