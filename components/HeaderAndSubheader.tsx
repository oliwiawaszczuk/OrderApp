import React from 'react';
import {View, Text} from "react-native";
import {StyleSheet} from "react-native";
import {primary} from "@/constants/styles/Colors";
import {styles} from "@/constants/styles/headerAndSubheaderCSS";

export default function HeaderAndSubheader({header, subheader}: {header: string, subheader: string}) {
    return (
        <View style={styles.header}>
            {header.trim() !== "" && <Text style={styles.headerText}>{header}</Text>}
            {subheader.trim() !== "" && <Text style={styles.subText}>{subheader}</Text>}
        </View>
    );
}