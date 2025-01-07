import React, {useEffect, useState} from "react";
import {View, Text, Button, ScrollView} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import Order, {TypeOfDelivery} from "@/constants/types/IOrder";
import {InputArea, InputText} from "@/components/forms/Input";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {right_arrow} from "@/constants/icons";
import Space from "@/components/Space";

export default function DeliveryDetails() {
    const router = useRouter()
    const local = useLocalSearchParams()
    const id = local.id

    const [name, setName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [localisation, setLocalisation] = useState("")
    const [cost, setCost] = useState("")
    const [deliveryContactInfo, setDeliveryContactInfo] = useState("")
    const [orderedServices, setOrderedServices] = useState("")
    const [note, setNote] = useState("")

    return (
        <ScrollView style={{paddingHorizontal: 15}}>
            <HeaderAndSubheader header="Delivery details" subheader=""/>
            <InputText label="Delivery name" get={name} set={setName}/>
            <InputText label="Company number" get={companyName} set={setCompanyName}/>
            <InputText label="Company localisation" get={localisation} set={setLocalisation}/>
            <InputText label="Cost" get={cost} set={setCost}/>
            <InputArea label="Delivery contact info" get={deliveryContactInfo} set={setDeliveryContactInfo} lines={4} />
            <PrimaryButton text={`See their services ${right_arrow}`} onPressFunc={()=>{}}/>
            <Space height={10}/>
            <InputArea label="Ordered services" get={orderedServices} set={setOrderedServices} lines={4} />
            <InputArea label="Note" get={note} set={setNote} lines={6} />
        </ScrollView>
    );
}