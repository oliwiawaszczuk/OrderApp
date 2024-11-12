import React, {useEffect, useState} from "react";
import {View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import IProduct from "@/constants/types/IProduct";
import {getPathToBackCategories} from "@/app/shop/getPathToBackCategories";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import {Products} from "@/assets/examplesData/Products";
import {number} from "prop-types";
import {backgroundColor, primary} from "@/constants/styles/Colors";
import ThirdButton from "@/components/buttons/ThirdButton";
import Space from "@/components/Space";
import {TypeOfDelivery} from "@/constants/types/IDelivery";
import {InputText} from "@/components/forms/Input";

export default function BuyById() {
    const router = useRouter();
    const local = useLocalSearchParams();
    const id = local.id;
    const [pathToBack, setPathToBack] = useState<string>()

    const [amount, setAmount] = useState<string>("")
    const [typeOfDelivery, setTypeOfDelivery] = useState<TypeOfDelivery>()
    const [deliveryLocalisation, setDeliveryLocalisation] = useState<string>("")
    const [deliveryDate, setDeliveryDate] = useState<string>("")

    const product: IProduct | undefined = Products.find((product) => product.id === Number(id))
    if (product === undefined)
        return <Text>Product with id: {id} not found</Text>

    useEffect(() => {
        setPathToBack(getPathToBackCategories(product.category))
    }, []);

    const options = Object.values(TypeOfDelivery);
    const handleOptionSelect = (type: TypeOfDelivery) => {
        setTypeOfDelivery(type);
    };

    function buyProduct() {
        console.log("buy product with id: ", id)
    }

    return (
        <ScrollView style={styles.container}>
            <ThirdButton text={`${pathToBack}`} onPressFunc={() => router.back()}/>
            <View style={styles.productContainer}>
                <Image style={styles.image} source={require('../../../assets/images/StructuralSteelBeams.png')}/>
                <View style={styles.productContainerText}>
                    <Text style={styles.productName}>{product.name}</Text>
                    {/*<Text style={styles.productDescription}>{product.description}</Text>*/}
                    <Text
                        style={styles.productCostText}>{product.currencyBeforeAmount ? product.currency + product.costAmount : product.costAmount + product.currency}
                        {product.forHowManyCost}</Text>
                </View>
            </View>
            <View style={styles.labelWith}>
                <Text style={styles.labelText}>Amount</Text>
                <InputText label="" get={amount} set={setAmount}/>
            </View>
            <View style={styles.labelWith}>
                <Text style={styles.labelText}>Type of delivery</Text>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.9}
                        style={[styles.optionContainer, typeOfDelivery === option && styles.optionSelected]}
                        onPress={() => handleOptionSelect(option)}
                    >
                        <View style={[styles.radioCircle, typeOfDelivery === option && styles.radioCircleSelected]}/>
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.labelWith}>
                <Text style={styles.labelText}>Delivery localisation</Text>
                <InputText label="" get={deliveryLocalisation} set={setDeliveryLocalisation}/>
            </View>
            <View style={styles.labelWith}>
                <Text style={styles.labelText}>Delivery date</Text>
                <InputText label="" get={deliveryDate} set={setDeliveryDate}/>
            </View>
            <PrimaryButton text="Buy" onPressFunc={() => buyProduct}/>
            <Space height={10}/>
            <SecondaryButton text="Cancel buy" onPressFunc={() => router.back()}/>
            <Space height={10}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        paddingHorizontal: 15,
    },
    productContainer: {
        flexDirection: "row",
        paddingVertical: 10,
    },
    image: {
        width: "30%",
        aspectRatio: 1,
        borderRadius: 15,
        borderColor: primary,
        borderWidth: 2,
    },
    productContainerText: {
        marginLeft: "5%",
        paddingBottom: 6,
        width: "65%",
        justifyContent: "flex-end",
        borderBottomColor: primary,
        borderStyle: "dotted",
        borderBottomWidth: 2,
    },
    productName: {
        color: primary,
        fontWeight: "bold",
        fontSize: 22,
    },
    productDescription: {
        color: primary,
    },
    productCostText: {
        color: primary,
        fontSize: 20,
    },
    labelText: {
        color: "#41545d",
        fontSize: 17,
        paddingBottom: 5,
    },
    labelWith: {
        paddingVertical: 10,
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e2e8f0",
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    optionSelected: {
        borderColor: primary,
    },
    radioCircle: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: "#cbd5e0",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    radioCircleSelected: {
        borderColor: primary,
        backgroundColor: primary,
    },
    optionText: {
        fontSize: 16,
        color: "#4a5568",
    },
})