import {Button, Text} from "react-native-paper";
import {ButtonInterface, styles} from "@/components/buttons/ButtonInterface";
import {TouchableOpacity} from "react-native";
import React from "react";

export default function SecondaryButton({text, onPressFunc}: ButtonInterface) {
    return (
        <TouchableOpacity
            style={[styles.button, styles.buttonSecondary]}
            onPress={onPressFunc}
            activeOpacity={0.7}
        >
            <Text style={styles.buttonTextSecondary}>{text}</Text>
        </TouchableOpacity>
    );
}