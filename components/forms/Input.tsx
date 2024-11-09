import {styles} from "@/constants/styles/orderCSS";
import {TextInput} from "react-native-paper";
import React from "react";
import {primary} from "@/constants/styles/Colors";



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

export function InputArea({label, get, set, lines}: {label: string, get: any, set: any, lines: number}) {
    return (
        <TextInput
            style={[styles.input, styles.textArea]}
            mode="outlined"
            label={label}
            value={get}
            onChangeText={set}
            multiline={true}
            numberOfLines={lines}
        />
    );
}