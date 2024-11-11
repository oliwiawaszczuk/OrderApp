import React from 'react';
import {View, Text} from 'react-native';
import {useRouter} from "expo-router";
import {renderOrderItemsToList} from "@/components/renderOrderShortItem";
import {styles} from "@/constants/styles/orderCSS";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";

// router.navigate(`/order/useOldProject`); - native stack navigator

export default function Order() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <HeaderAndSubheader header={"Create new order"} subheader={"Add products, choose your supplier, and set delivery details—all in one place. Stay organized and keep every order on track!"}/>
    
            <PrimaryButton text={"New Order"} onPressFunc={() => {router.navigate(`/order/makeNewProject`);}}/>
            <View style={{height: 14}}></View>
            <SecondaryButton text={"New order for old project"} onPressFunc={() => {router.navigate(`/order/useOldProject`);}}/>
            <View style={{height: 14}}></View>
            <SecondaryButton text={"New order without project"} onPressFunc={() => {router.navigate(`/order/doWithoutProject`);}}/>

            <Text style={styles.historyLabel}>History</Text>
            {renderOrderItemsToList()}
        </View>
    );
}
