import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {primary} from "@/constants/Colors";

const iconSize = 24;
const iconColor = primary;

enum EStatus {
    Processing = "#cdcd47",
    Delivered = "#5eff5e",
    Canceled = "#ff5656",
}

interface orderShortItem {
    id: string,
    date: string,
    delivery: string,
    material: string,
    status: EStatus,
}

// @ts-ignore
export const orderShortData: orderShortItem = [
    {id: '1', date: '21/10/2025', delivery: "Delivery1", material: "Material1", status: EStatus.Processing},
    {id: '2', date: '20/10/2025', delivery: "Delivery2", material: "Material2", status: EStatus.Canceled},
    {id: '3', date: '19/10/2025', delivery: "Delivery3", material: "Material3", status: EStatus.Delivered},
    {id: '4', date: '18/10/2025', delivery: "Delivery4", material: "Material4", status: EStatus.Canceled},
    {id: '5', date: '17/10/2025', delivery: "Delivery5", material: "Material5", status: EStatus.Processing},
    {id: '6', date: '16/10/2025', delivery: "Delivery6", material: "Material6", status: EStatus.Processing},
];

const getStatusName = (status: EStatus) => {
    return Object.keys(EStatus).find(key => EStatus[key as keyof typeof EStatus] === status) || '';
};

export const renderOrderShortItem = ({item}: { item: orderShortItem }) => (
    <View style={styles.listItem}>
        <Text style={styles.dateText}>{item.date}</Text>

        <View style={styles.iconsContainer}>
            <View style={styles.iconsContainer2}>
                <MaterialCommunityIcons name="truck" size={iconSize} color={iconColor}/>
                <Text style={styles.iconsText}>{item.delivery}</Text>
            </View>
            <View style={styles.iconsContainer2}>
                <MaterialCommunityIcons name="cube-outline" size={iconSize} color={iconColor}/>
                <Text style={styles.iconsText}>{item.material}</Text>
            </View>
            <View style={styles.iconsContainer2}>
                <MaterialCommunityIcons name="radiobox-marked" size={iconSize} color={item.status}/>
                <Text style={styles.iconsText}>{getStatusName(item.status)}</Text>
            </View>
            <MaterialCommunityIcons name="arrow-right" size={iconSize} color={iconColor}/>
        </View>
    </View>
);

export function renderOrderItemsToList() {

    function redirectToOrderDetails (id: string) {
        console.log("redirect to order details ", id);
    }

    const renderItem = ({item}: {item: orderShortItem}) => (
        <TouchableOpacity onPress={() => redirectToOrderDetails(item.id)}>
            {renderOrderShortItem({item})}
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={orderShortData}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 20,
    },
    listItem: {
        paddingVertical: 15,
    },
    dateText: {
        fontSize: 15,
        color: primary,
        fontWeight: "bold",
        marginBottom: 8,
        borderBottomWidth: 3,
        borderBottomColor: primary,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",
    },
    iconsContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        marginHorizontal: 10,
    },
    iconsText: {
        color: iconColor,
        marginHorizontal: 5,
    },
});