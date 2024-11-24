import {FlatList, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {primary} from "@/constants/styles/Colors";
import {styles} from "@/constants/styles/orderItemsCSS";
import {useRouter} from "expo-router";
import {deliveryShortData} from "@/assets/examplesData/Delivery";
import {ShortItemDelivery} from "@/constants/types/IDelivery";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {stylesProjectItems} from "@/constants/styles/projectItemsCSS";

const iconSize = 24;
const iconColor = primary;


export const renderDeliveryShortItem = ({item, onpress}: { item: ShortItemDelivery, onpress: any }) => (
    <View style={stylesProjectItems.listItem}>
        <Text style={stylesProjectItems.dateText}>{item.name}</Text>

        <View style={stylesProjectItems.infoContainer}>
            <View style={stylesProjectItems.infoColumn}>
                <View style={stylesProjectItems.infoRow}>
                    <MaterialCommunityIcons name="folder" size={iconSize} color={iconColor}/>
                    <Text style={stylesProjectItems.infoText}>{item.companyName}</Text>
                </View>
                <View style={stylesProjectItems.infoRow}>
                    <MaterialCommunityIcons name="account" size={iconSize} color={iconColor}/>
                    <Text style={stylesProjectItems.infoText}>{item.contact}</Text>
                </View>
                <View style={stylesProjectItems.infoRow}>
                    <MaterialCommunityIcons name="map-marker" size={iconSize} color={iconColor}/>
                    <Text style={stylesProjectItems.infoText}>{item.projectContracted}</Text>
                </View>
                <View style={stylesProjectItems.infoRow}>
                    <MaterialCommunityIcons name="map-marker" size={iconSize} color={iconColor}/>
                    <Text style={stylesProjectItems.infoText}>{item.statusPartnership}</Text>
                </View>
            </View>
            <MaterialCommunityIcons onPress={onpress} name="arrow-right" size={iconSize - 8} color="white" style={stylesProjectItems.arrowIcon}/>
        </View>
    </View>
);

export function renderDeliveryShortItems({deliveryShortDataa = deliveryShortData }: {deliveryShortDataa: ShortItemDelivery }) {
    const router = useRouter()

    function redirectToDeliveryDetails (id: number) {
        router.push(`/delivery/${id}`)
    }

    const renderItem = ({item}: {item: ShortItemDelivery}) => (
        <TouchableOpacity onPress={() => redirectToDeliveryDetails(item.id)}>
            {renderDeliveryShortItem({item, onpress: () => redirectToDeliveryDetails(item.id)})}
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={deliveryShortDataa}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => item.id}
        />
    )
}