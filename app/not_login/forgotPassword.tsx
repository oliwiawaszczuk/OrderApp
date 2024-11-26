import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {InputText} from "@/components/forms/Input";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {right_arrow} from "@/constants/icons";
import Space from "@/components/Space";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import {primary} from "@/constants/styles/Colors";

export default function ForgotPassword() {
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{marginHorizontal: 35}}>
            <HeaderAndSubheader header="Forgot your password?" subheader=""/>

            <InputText label="Email" get={email} set={setEmail}/>
            <InputText label="Password" get={password} set={setPassword}/>

            <PrimaryButton text={`Reset your password ${right_arrow}`} onPressFunc={() => router.navigate("/not_login/resetYourPassword")}/>
            <Space height={20}/>
            <SecondaryButton text="Back" onPressFunc={() => router.back()}/>
        </View>
    );
}