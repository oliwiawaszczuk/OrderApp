import {StyleSheet} from "react-native";
import {primary, secondary} from "@/constants/styles/Colors";

export interface ButtonInterface {
    text: string,
    onPressFunc: any,
}

export interface ButtonIconInterface extends ButtonInterface {
    iconName: string,
}

export const styles = StyleSheet.create({
    button: {
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        // marginVertical: 5,
        // marginHorizontal: 10,
        borderColor: primary,
        borderWidth: 2,
    },
    buttonPrimary: {
        backgroundColor: primary,
        borderColor: primary,
    },
    buttonTextPrimary: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSecondary: {
        backgroundColor: secondary,
    },
    buttonTextSecondary: {
        color: primary,
        fontSize: 16,
        fontWeight: 'bold',
    },
});