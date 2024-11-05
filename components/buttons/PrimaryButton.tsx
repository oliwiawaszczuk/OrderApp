import {Button, Text} from "react-native-paper";
import {ButtonIconInterface, ButtonInterface, styles} from "@/components/buttons/ButtonInterface";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";


export default function PrimaryButton({text, onPressFunc}: ButtonInterface) {
    return (
        <Button
            style={[styles.button, styles.buttonPrimary]}
            onPress={onPressFunc}
            labelStyle={styles.buttonTextPrimary}
            rippleColor="transparent"
        >
            {text}
        </Button>
    );
}