import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useRouter} from "expo-router";
import {renderOrderShortItem, orderShortData, renderOrderItemsToList} from "@/components/renderOrderShortItem";
import useOldProject from "./useOldProject"
import {styles} from "@/constants/orderCSS";
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
            <SecondaryButton text={"New order for old project"} onPressFunc={() => {router.navigate(`/order/useOldProject`);}}/>
            <SecondaryButton text={"New order without project"} onPressFunc={() => {router.navigate(`/order/doWithoutProject`);}}/>

            <Text style={styles.historyLabel}>History</Text>
            {renderOrderItemsToList()}
        </View>
    );
}
