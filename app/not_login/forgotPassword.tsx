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

    const [resetClicked, setResetClicked] = useState(false)

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    return (
        <>
         {resetClicked ?
            <View style={{marginHorizontal: 35}}>
                <HeaderAndSubheader header="Forgot your password?" subheader=""/>

                <InputText label="Email" get={email} set={setEmail}/>
                <InputText label="Phone" get={phone} set={setPhone}/>

                <PrimaryButton text={`Reset your password ${right_arrow}`} onPressFunc={() => router.navigate("/not_login/resetYourPassword")}/>
                <Space height={20}/>
                <SecondaryButton text="Back" onPressFunc={() => router.back()}/>
            </View> :
            <View style={{marginHorizontal: 35}}>
                <HeaderAndSubheader header="Check your e-mail!" subheader="Your temporary password send to your adress email! Follow instructions to enstablish your new password.
    If you can’t see mail from us, remeber to check your spam folder."/>

                 <PrimaryButton text={`Go to log in ${right_arrow}`} onPressFunc={() => router.navigate("/not_login/login")}/>
            </View>
         }
        </>
    )
}