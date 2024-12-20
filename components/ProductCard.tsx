import {Card} from "react-native-paper";
import React from "react";
import {Image, View, Text, StyleSheet} from "react-native";
import IProduct from "@/constants/types/IProduct";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import {primary} from "@/constants/styles/Colors";
import {useRouter} from "expo-router";
import ThirdButton from "@/components/buttons/ThirdButton";
import FourthButton from "@/components/buttons/FourthButton";
import Space from "@/components/Space";

export default function ProductCard({product}: {product: IProduct}) {
    const router = useRouter()

    return (
        <Card style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/StructuralSteelBeams.png')}/>
            <Space height={8}/>
            <View style={styles.nameAndCost}>
                <Text style={[styles.text, styles.nameText]}>{product.name}</Text>
                <Text style={[styles.text, styles.costText]}>
                    {product.currencyBeforeAmount ? product.currency + product.costAmount : product.costAmount + product.currency}
                    {product.forHowManyCost}
                </Text>
            </View>
            <View style={styles.description}>
                <Text style={[styles.text, {fontSize: 16}]}>{product.description}</Text>
            </View>
            {/*<SecondaryButton text="Buy now" onPressFunc={() => router.navigate(`/shop/buy/${product.id}`)}/>*/}
            <FourthButton text="Buy now" onPressFunc={() => router.navigate(`/shop/buy/${product.id}`)}/>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        // backgroundColor: "#eceff6",
        // borderColor: primary,
        // borderWidth: 0.8,
        // borderRadius: 15,
    },
    image: {
        width:"100%",
        borderRadius: 15,
        borderColor: primary,
        borderWidth: 2,
        height: 200,
    },
    nameAndCost: {
        padding: 4,
        flexDirection: "row",
        flexWrap: "wrap",
        width:"100%",
        justifyContent: "space-between",
    },
    description: {
        paddingBottom: 10,
        paddingHorizontal: 4,
    },
    text: {
        fontSize: 18,
        color: primary,
    },
    nameText: {
        fontWeight: "bold",
        // width: "65%"
    },
    costText: {
        fontWeight: "bold",
        // width: "35%",
        // textAlign: "right"
    },
})