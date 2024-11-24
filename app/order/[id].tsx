import React, {useEffect, useState} from "react";
import {View, Text, Button} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import Order, {TypeOfDelivery} from "@/constants/types/IOrder";
import {InputArea, InputText} from "@/components/forms/Input";
import {storage} from "@/api/store";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function OrderDetails() {
    const router = useRouter();
    const local = useLocalSearchParams();
    const id = local.id;

    const hostApi = storage((state) => state.hostApi)

    const [productName, setProductName] = useState("");
    const [productNumber, setProductNumber] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [typeOfDelivery, setTypeOfDelivery] = useState<TypeOfDelivery>(TypeOfDelivery.type1);
    const [cost, setCost] = useState("")
    const [sellerContactInfo, setSellerContactInfo] = useState("")
    const [note, setNote] = useState("")

    useEffect(() => {
        // fetch for order details for order by order id
        fetch(`${hostApi}/orderDetails/${id}`)
            .then(res => res.json() as Promise<Order>)
            .then(order => {
                // setProductName(order.products)
                setTypeOfDelivery(order.typeOfDelivery)
                // setCost(order.cost)
                // setSellerContactInfo(order.)
                // setNote(order.note)
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <View style={{paddingHorizontal: 15}}>
            <HeaderAndSubheader header="Order details" subheader=""/>
            <InputText label="Product name" get={productName} set={setProductName}/>
            <InputText label="Product number" get={productNumber} set={setProductNumber}/>
            <InputText label="Localisation" get={localisation} set={setLocalisation}/>
            {/* typeOfDelivery */}
            <InputText label="Cost" get={cost} set={setCost}/>
            <InputArea label="Type seller contact info..." get={sellerContactInfo} set={setSellerContactInfo} lines={4} />
            <InputArea label="Type your note here..." get={note} set={setNote} lines={6} />

            <PrimaryButton text="Back" onPressFunc={() => router.back()}/>
            <PrimaryButton text="Edit" onPressFunc={() => {}}/>
        </View>
    );
}