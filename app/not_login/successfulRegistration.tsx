import React from "react";
import {View} from "react-native";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {right_arrow} from "@/constants/icons";
import {useRouter} from "expo-router";
import {storage} from "@/api/store";

export default function SuccessfulRegistration() {
    const router = useRouter();
    const autologin = storage((state) => state.autoLogin)

    return (
        <View style={{marginHorizontal: 20}}>
            <HeaderAndSubheader header={"Welcome!\nYou’re Ready to Go"} subheader={"Your account is all set! Now you can start managing your business more efficiently with OrderFlow."}/>
            <PrimaryButton text={`Go to Home Page ${right_arrow}`} onPressFunc={() => {
                router.navigate("/home")
                autologin()
            }}/>
        </View>
    )
}