import {Button, Text} from "react-native-paper";
import {ButtonIconInterface, ButtonInterface, styles} from "@/components/buttons/ButtonInterface";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {TouchableOpacity} from "react-native";


export default function ThirdButton({text, onPressFunc}: ButtonInterface) {
    return (
        <TouchableOpacity
            style={[styles.button, styles.buttonThird]}
            onPress={onPressFunc}
            activeOpacity={0.8}
        >
            <Text style={styles.buttonTextThird}>{text}</Text>
        </TouchableOpacity>
    );
}