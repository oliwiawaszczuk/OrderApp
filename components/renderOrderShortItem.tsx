import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useEffect} from "react";
import {primary} from "@/constants/styles/Colors";
import {EStatus, orderShortItem} from "@/constants/types/IOrder";
import {styles} from "@/constants/styles/orderItemsCSS";
import {orderShortData} from "@/assets/examplesData/Order";
import {useRouter} from "expo-router";
import LoadingView from "@expo/metro-runtime/build/LoadingView.native";

const iconSize = 24;
const iconColor = primary;

const getStatusName = (status: EStatus) => {
    return Object.keys(EStatus).find(key => EStatus[key as keyof typeof EStatus] === status) || '';
};

export const renderOrderShortItem = ({item}: { item: orderShortItem }) => (
    <View style={styles.listItem}>
        <Text style={styles.dateText}>{item.date}</Text>

        <View style={styles.iconsContainer}>
            <View style={[styles.gridItem, {width: "30%"}]}>
                <MaterialCommunityIcons name="truck" size={iconSize} color={iconColor} />
                <Text style={styles.iconsText}>{item.delivery}</Text>
            </View>

            <View style={[styles.gridItem, {width: "30%"}]}>
                <MaterialCommunityIcons name="cube-outline" size={iconSize} color={iconColor} />
                <Text style={styles.iconsText}>{item.material}</Text>
            </View>

            <View style={[styles.gridItem, {width: "30%"}]}>
                <MaterialCommunityIcons name="radiobox-marked" size={iconSize} color={item.status} />
                <Text style={styles.iconsText}>{getStatusName(item.status)}</Text>
            </View>

            <View style={styles.gridItem}>
                <MaterialCommunityIcons name="arrow-right" size={iconSize} color={iconColor} />
            </View>
        </View>
    </View>
);

export function renderOrderItemsToList({orderData = orderShortData }: {orderData: orderShortItem }) {
    const router = useRouter()

    function redirectToOrderDetails (id: number) {
        router.push(`/order/${id}`)
    }

    const renderItem = ({item}: {item: orderShortItem}) => (
        <TouchableOpacity onPress={() => redirectToOrderDetails(item.id)}>
            {renderOrderShortItem({item})}
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={orderData}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => item.id}
        />
    )
}