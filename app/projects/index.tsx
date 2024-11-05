import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useRouter} from "expo-router";
import {styles} from "@/constants/orderCSS";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {projectShortData, renderProjectShortItem} from "@/components/renderProjectShortItem";

export default function Project() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <HeaderAndSubheader header={"Projects"} subheader={"Projects Projects Projects Projects"}/>

            <TouchableOpacity style={styles.buttonPrimary} onPress={() => {router.navigate(`/projects/orderHistory`);}}>
                <Text style={styles.buttonTextPrimary}>Order History</Text>
            </TouchableOpacity>

            <FlatList
                data={projectShortData}
                renderItem={renderProjectShortItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}
