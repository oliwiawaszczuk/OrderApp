import {View, StyleSheet, FlatList} from 'react-native';
import {Link} from "expo-router";
import React from "react";
import {Button, Text, Card} from "react-native-paper";
import {orderShortData, renderOrderItemsToList, renderOrderShortItem} from "@/components/renderOrderShortItem";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import {primary} from "@/constants/Colors";
import {styles} from "@/constants/orderCSS";

export default function Home() {
    return (
        <View style={styles.container}>
            <HeaderAndSubheader header={"Highly effective solutions"} subheader={"Manage orders, track costs, and visualize data with ease. We gives you the tools to drive smarter business decisions."}/>

            <View style={stylesHome.buttonContainer}>
                <PrimaryButton text={"New Order"} onPressFunc={() => console.log('New Order pressed')}/>
                <SecondaryButton text={"Learn More"} onPressFunc={() => console.log('Learn More pressed')}/>
            </View>

            <Card style={stylesHome.fundsCard}>
                <Card.Content>
                    <Text style={stylesHome.fundsText}>Available funds</Text>
                    <Text style={stylesHome.fundsAmount}>54,44$</Text>
                </Card.Content>
            </Card>

            <Text style={styles.historyLabel}>History</Text>

            {renderOrderItemsToList()}

        </View>
    );
}

const stylesHome = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    fundsCard: {
        backgroundColor: primary,
        padding: 8,
        borderRadius: 20,
    },
    fundsText: {
        color: '#fff',
        fontSize: 16,
    },
    fundsAmount: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
