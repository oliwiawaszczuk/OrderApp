import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {styles} from "@/constants/orderCSS";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";

export default function OrderHistory() {

    return (
        <View style={styles.container}>
            <HeaderAndSubheader header={"Order history"} subheader={"Create new order Create new order Create new order "}/>

        </View>
    );
}
