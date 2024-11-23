import React, {useEffect, useState} from "react";
import {View, Text, Button} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import Order, {TypeOfDelivery} from "@/constants/types/IOrder";
import {InputArea, InputText} from "@/components/forms/Input";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function ProjectDetails() {
    const router = useRouter();
    const local = useLocalSearchParams();
    const id = local.id;

    useEffect(() => {
        // fetch for project details by project id
        fetch("/orders/<token>")
            .then(response => response.json() as Promise<Order>)
            .then(data => {

            })
    }, []);

    const [projectName, setProjectName] = useState("");
    const [projectNumber, setProjectNumber] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [leader, setLeader] = useState("")
    const [sellerContactInfo, setSellerContactInfo] = useState("")
    const [note, setNote] = useState("")

    return (
        <View style={{paddingHorizontal: 15}}>
            <HeaderAndSubheader header="Project details" subheader=""/>
            <InputText label="Product name" get={projectName} set={setProjectName}/>
            <InputText label="Product number" get={projectNumber} set={setProjectNumber}/>
            <InputText label="Localisation" get={localisation} set={setLocalisation}/>
            <InputText label="Cost" get={leader} set={setLeader}/>
            <InputArea label="Type seller contact info..." get={sellerContactInfo} set={setSellerContactInfo} lines={4} />
            <InputArea label="Type your note here..." get={note} set={setNote} lines={6} />
            <PrimaryButton text="See orders for this project" onPressFunc={() => router.navigate(`/order/project/${id}`)}/>
        </View>
    );
}