import {Text} from "react-native-paper";
import {ButtonInterface, styles} from "@/components/buttons/ButtonInterface";
import React from "react";
import {TouchableOpacity} from "react-native";


export default function PrimaryButton({text, onPressFunc}: ButtonInterface) {
    return (
        <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={onPressFunc}
            activeOpacity={0.8}
        >
            <Text style={styles.buttonTextPrimary}>{text}</Text>
        </TouchableOpacity>
    );
}