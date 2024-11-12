import {View} from "react-native";
import React from "react";

export default function Space({height}: {height: number}) {
    return (
        <View style={{height: height}}></View>
    )
}