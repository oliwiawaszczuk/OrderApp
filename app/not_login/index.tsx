import React from 'react';
import {View, Text} from 'react-native';
import {useRouter} from "expo-router";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {right_arrow} from "@/constants/icons";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Space from "@/components/Space";
import {Footer} from "@/components/Footer";

export default function Index() {
    const router = useRouter();

    return (
         <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{margin: 15}}>
                <Space height={30}/>
                <HeaderAndSubheader header="Discover the key to grow your business" subheader=""/>
                <Space height={20}/>
                <PrimaryButton text={`Get started ${right_arrow}`} onPressFunc={() => router.push("/not_login/register")} />
                <Space height={20}/>
                <SecondaryButton text="Log in" onPressFunc={() => router.push("/not_login/login")}/>
            </View>
            <View style={{alignSelf: 'stretch'}}><Footer /></View>
        </View>
    )
}
