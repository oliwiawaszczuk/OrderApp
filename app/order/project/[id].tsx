import {ScrollView, View} from "react-native";
import {renderOrderItemsToList} from "@/components/renderOrderShortItem";
import {useLocalSearchParams, useRouter} from "expo-router";
import {orderShortData} from "@/assets/examplesData/Order";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import React, {useEffect} from "react";

export default function ProjectOrders() {
    const router = useRouter();
    const local = useLocalSearchParams();
    const id = local.id;

    // const orders = orderShortData.filter((item) => item.projectId === id) // filter by projectId
    const orders = orderShortData // potrzeba filter by projectId

    return (
        <View>
            <HeaderAndSubheader header="Orders" subheader=""/>
            {renderOrderItemsToList({orderData: orders})}
        </View>
    )
}