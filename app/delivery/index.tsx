import React from 'react';
import {View} from 'react-native';
import {useRouter} from "expo-router";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {stylesHome} from "@/constants/styles/homeCSS";
import {renderDeliveryShortItems} from "@/components/renderDeliveryShortItem";

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
