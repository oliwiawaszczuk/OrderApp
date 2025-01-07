import {TextInput} from "react-native-paper";
import React from "react";
import {Keyboard, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {styles} from "@/constants/styles/inputCSS";
import {primary} from "@/constants/styles/Colors";



export function InputText({label, get, set}: {label: string, get: string, set: (text: string) => void}) {
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

export function InputNumeric({label, get, set}: {label: string, get: string, set: (text: string) => void}) {
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

export function InputArea({label, get, set, lines}: {label: string, get: string, set: (text: string) => void, lines: number}) {
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

export function SearchInput({get, set}: {get: string, set: (text: string) => void}) {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                outlineStyle={styles.searchInput}
                mode="outlined"
                placeholder="Search..."
                value={get}
                onChangeText={set}
                onSubmitEditing={() => Keyboard.dismiss()}
            />
            <Ionicons onPress={() => Keyboard.dismiss()} name="search" size={20} color="#777" style={styles.icon} />
        </View>
    );
}