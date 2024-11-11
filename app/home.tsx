import {View} from 'react-native';
import React from "react";
import {Text, Card} from "react-native-paper";
import {renderOrderItemsToList} from "@/components/renderOrderShortItem";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import {styles} from "@/constants/styles/orderCSS";
import {stylesHome} from "@/constants/styles/homeCSS";
import {useRouter} from "expo-router";

function FundsCard() {
    return (
        <Card style={stylesHome.fundsCard}>
            <Card.Content>
                <Text style={stylesHome.fundsText}>Available funds</Text>
                <Text style={stylesHome.fundsAmount}>54,44$</Text>
            </Card.Content>
        </Card>
    );
}

export default function Home() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <HeaderAndSubheader header={"Highly effective solutions"} subheader={"Manage orders, track costs, and visualize data with ease. We gives you the tools to drive smarter business decisions."}/>

            <View style={stylesHome.buttonContainer}>
                <PrimaryButton text={"New Order"} onPressFunc={() => router.navigate("/order/makeNewProject")}/>
                <View style={{width: 10}}></View>
                <SecondaryButton text={"Learn More"} onPressFunc={() => console.log('Learn More pressed')}/>
            </View>

            <FundsCard/>

            <Text style={styles.historyLabel}>History</Text>

            {renderOrderItemsToList()}

        </View>
    );
}
