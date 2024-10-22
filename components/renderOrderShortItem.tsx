import {StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

const iconSize = 24;
const iconColor = "#99A1B3";

interface orderShortItem {
    id: string,
    data: string,
    delivery: string,
    material: string,
    status: string,
}

export const orderShortData: orderShortItem = [
    {id: '1', date: '01/10/2024', delivery: "Delivery1", material: "Material1", status:"status1"},
    {id: '2', date: '02/10/2024', delivery: "Delivery2", material: "Material2", status:"status2"},
    {id: '3', date: '03/10/2024', delivery: "Delivery3", material: "Material3", status:"status3"},
    {id: '4', date: '04/10/2024', delivery: "Delivery4", material: "Material4", status:"status4"},
    {id: '5', date: '05/10/2024', delivery: "Delivery5", material: "Material5", status:"status5"},
    {id: '6', date: '06/11/2024', delivery: "Delivery6", material: "Material6", status:"status6"},
    {id: '7', date: '06/11/2024', delivery: "Delivery6", material: "Material6", status:"status6"},
    {id: '8', date: '06/11/2024', delivery: "Delivery6", material: "Material6", status:"status6"},
    {id: '9', date: '06/11/2024', delivery: "Delivery6", material: "Material6", status:"status6"},
    {id: '10', date: '06/11/2024', delivery: "Delivery6", material: "Material6", status:"status6"},
    {id: '11', date: '06/11/2024', delivery: "Delivery6", material: "Material6", status:"status6"},
    {id: '12', date: '06/11/2024', delivery: "Delivery6", material: "Material6", status:"status6"},
    {id: '13', date: '06/11/2024', delivery: "Delivery6", material: "Material6", status:"status6"},
];

export const renderOrderShortItem = ({item}) => (
    <View style={styles.listItem}>
        <Text style={styles.dateText}>{item.date}</Text>

        <View style={styles.iconsContainer}>
            <View style={styles.iconsContainer2}>
                <MaterialCommunityIcons name="truck" size={iconSize} color={iconColor}/>
                <Text style={styles.iconsText}>{item.delivery}</Text>
            </View>
            <View style={styles.iconsContainer2}>
                <MaterialCommunityIcons name="hammer" size={iconSize} color={iconColor}/>
                <Text style={styles.iconsText}>{item.material}</Text>
            </View>
            <View style={styles.iconsContainer2}>
                <MaterialCommunityIcons name="file-document" size={iconSize} color={iconColor}/>
                <Text style={styles.iconsText}>{item.status}</Text>
            </View>
            <MaterialCommunityIcons name="arrow-right" size={iconSize} color={iconColor}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 20,
    },
    listItem: {
        paddingVertical: 15,
    },
    dateText: {
        fontSize: 14,
        color: '#99A1B3',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
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