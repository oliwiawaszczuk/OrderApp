import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useRouter} from "expo-router";
import {styles} from "@/constants/styles/orderCSS";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {renderProjectShortItem} from "@/components/renderProjectShortItem";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {stylesHome} from "@/constants/styles/homeCSS";
import {deliveryShortData} from "@/assets/examplesData/Delivery";
import {renderDeliveryShortItem, renderDeliveryShortItems} from "@/components/renderDeliveryShortItem";
import {renderOrderItemsToList} from "@/components/renderOrderShortItem";

export default function Delivery() {
    const router = useRouter();

    return (
        <View style={{margin: 15}}>
            <HeaderAndSubheader header="Delivery" subheader="Monitor all delivery details in one place, including estimated arrival times, current status, and order specifics. Access support options if adjustments are needed to ensure efficient and timely delivery."/>

            <View style={stylesHome.buttonContainer}>
                <PrimaryButton text={"Link Project"} onPressFunc={() => router.navigate("/delivery/")}/>
                <View style={{width: 10}}></View>
                <PrimaryButton text={"New Delivery"} onPressFunc={() => router.navigate("/delivery/")}/>
            </View>


            {renderDeliveryShortItems({})}
        </View>
    )
}
