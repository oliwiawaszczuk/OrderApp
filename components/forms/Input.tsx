import {styles} from "@/constants/orderCSS";
import {TextInput} from "react-native-paper";
import React from "react";
import {primary} from "@/constants/Colors";



export function InputText({label, get, set}: {label: string, get: any, set: any}) {
    return (
        <TextInput
            style={styles.input}
            activeOutlineColor={primary}
            mode="outlined"
            label={label}
            value={get}
            onChangeText={set}
        />
    );
}

export function InputNumeric({label, get, set}: {label: string, get: any, set: any}) {
    return (
        <TextInput
            style={styles.input}
            activeOutlineColor={primary}
            mode="outlined"
            label={label}
            value={get}
            onChangeText={set}
            keyboardType="numeric"
        />
    );
}