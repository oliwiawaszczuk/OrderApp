import {View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {right_arrow} from "@/constants/icons";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import {useRouter} from "expo-router";
import Space from "@/components/Space";
import {InputNumeric, InputText} from "@/components/forms/Input";
import {primary} from "@/constants/styles/Colors";

export default function Register() {
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sumbitLogin = () => {
        console.log("zalogowano ")
        router.push("/not_login/successfulRegistration");
    }

    return (
        <View style={{marginHorizontal: 35}}>
            <HeaderAndSubheader header={"Welcome Back! \nPlease Log In"} subheader=""/>

            <InputText label="Email" get={email} set={setEmail}/>
            <InputText label="Password" get={password} set={setPassword}/>

            <PrimaryButton text={`Log in ${right_arrow}`} onPressFunc={() => sumbitLogin()}/>
            <Space height={20}/>
            <SecondaryButton text="Back" onPressFunc={() => router.back()}/>

            <Space height={30}/>
            <TouchableOpacity onPress={() => {router.navigate("/not_login/forgotPassword")}}>
                <Text style={{fontSize: 16, color: primary}}>Forgot your password?</Text>
            </TouchableOpacity>
        </View>
    );
}
