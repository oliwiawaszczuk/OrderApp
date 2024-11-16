import React, {useEffect, useState} from "react"
import {View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert} from "react-native"
import {useLocalSearchParams, useRouter} from "expo-router"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import IProduct from "@/constants/types/IProduct"
import {getPathToBackCategories} from "@/app/shop/getPathToBackCategories"
import SecondaryButton from "@/components/buttons/SecondaryButton"
import {Products} from "@/assets/examplesData/Products"
import {backgroundColor, primary} from "@/constants/styles/Colors"
import ThirdButton from "@/components/buttons/ThirdButton"
import Space from "@/components/Space"
import {TypeOfDelivery} from "@/constants/types/IDelivery"
import {InputText} from "@/components/forms/Input"

export default function BuyById() {
    const router = useRouter()
    const local = useLocalSearchParams()
    const id = local.id
    const [pathToBack, setPathToBack] = useState<string>()

    const [amount, setAmount] = useState<string>("")
    const [typeOfDelivery, setTypeOfDelivery] = useState<TypeOfDelivery>()
    const [deliveryLocalisation, setDeliveryLocalisation] = useState<string>("")
    const [deliveryDate, setDeliveryDate] = useState<string>("")

    const [errors, setErrors] = useState({
        amount: "",
        typeOfDelivery: "",
        deliveryLocalisation: "",
        deliveryDate: "",
    })

    const product: IProduct | undefined = Products.find((product) => product.id === Number(id))
    if (product === undefined) return <Text>Product with id: {id} not found</Text>

    useEffect(() => {
        setPathToBack(getPathToBackCategories(product.category))
    }, [])

    const options = Object.values(TypeOfDelivery)
    const handleOptionSelect = (type: TypeOfDelivery) => {
        setTypeOfDelivery(type)
    }

    const validateForm = () => {
        let isValid = true
        let errorsTemp = {amount: "", typeOfDelivery: "", deliveryLocalisation: "", deliveryDate: ""}

        if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
            errorsTemp.amount = "Please enter a valid amount greater than 0."
            isValid = false
        }

        if (!typeOfDelivery) {
            errorsTemp.typeOfDelivery = "Please select a delivery type."
            isValid = false
        }

        if (!deliveryLocalisation) {
            errorsTemp.deliveryLocalisation = "Please enter a delivery location."
            isValid = false
        }

        if (!deliveryDate) {
            errorsTemp.deliveryDate = "Please enter a delivery date."
            isValid = false
        }

        setErrors(errorsTemp)
        return isValid
    }

    const buyProduct = () => {
        if (validateForm()) {
            console.log("buy product with id: ", id)
            setDeliveryDate("")
            setDeliveryLocalisation("")
            setAmount("")
            setTypeOfDelivery(undefined)
        } else {
            console.log("Form Error", "Please correct the errors before proceeding.")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <ThirdButton text={`${pathToBack}`} onPressFunc={() => router.back()}/>
            <View style={styles.productContainer}>
                <Image style={styles.image} source={require('../../../assets/images/StructuralSteelBeams.png')}/>
                <View style={styles.productContainerText}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text
                        style={styles.productCostText}>{product.currencyBeforeAmount ? product.currency + product.costAmount : product.costAmount + product.currency}{product.forHowManyCost}</Text>
                </View>
            </View>
            <View style={[styles.labelWith, errors.amount ? styles.errorContainer : {}]}>
                <Text style={styles.labelText}>Amount</Text>
                <InputText label="" get={amount} set={setAmount}/>
                {errors.amount ? <Text style={styles.errorText}>{errors.amount}</Text> : null}
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
                {errors.typeOfDelivery ? <Text style={styles.errorText}>{errors.typeOfDelivery}</Text> : null}
            </View>
            <View style={styles.labelWith}>
                <Text style={styles.labelText}>Delivery localisation</Text>
                <InputText label="" get={deliveryLocalisation} set={setDeliveryLocalisation}/>
                {errors.deliveryLocalisation ?
                    <Text style={styles.errorText}>{errors.deliveryLocalisation}</Text> : null}
            </View>
            <View style={styles.labelWith}>
                <Text style={styles.labelText}>Delivery date</Text>
                <InputText label="" get={deliveryDate} set={setDeliveryDate}/>
                {errors.deliveryDate ? <Text style={styles.errorText}>{errors.deliveryDate}</Text> : null}
            </View>
            <PrimaryButton text="Buy" onPressFunc={buyProduct}/>
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
        paddingHorizontal: 10,
        borderRadius: 15,
        // paddingVertical: 10,
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
    errorText: {
        color: "red",
        fontSize: 14,
        // marginTop: 5,
    },
    errorContainer: {
        // borderColor: "red",
        // borderWidth: 1,
    },
})
