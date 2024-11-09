import React, {useEffect, useState} from "react";
import {View, Text, Button} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {TypeOfDelivery} from "@/constants/types/IOrder";
import {InputArea, InputText} from "@/components/forms/Input";

export default function OrderDetails() {
    const router = useRouter();
    const local = useLocalSearchParams();
    const id = local.id;

    useEffect(() => {
        // fetch for order details for order by order id
    }, []);

    const [productName, setProductName] = useState("");
    const [productNumber, setProductNumber] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [typeOfDelivery, setTypeOfDelivery] = useState<TypeOfDelivery>(TypeOfDelivery.type1);
    const [cost, setCost] = useState("")
    const [sellerContactInfo, setSellerContactInfo] = useState("")
    const [note, setNote] = useState("")

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
        </View>
    );
}