import {StyleSheet} from "react-native";
import {defaultIconColor, primary, secondary} from "@/constants/styles/Colors";

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
        paddingVertical: 20,
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
    buttonThird: {
        backgroundColor: "#fff",
        marginVertical: 5,
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 3,
    },
    buttonTextThird: {
        width: "100%",
        color: primary,
        justifyContent: "flex-start",
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonFourth: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: defaultIconColor,
        paddingVertical: 15,
    },
    buttonTextFourth: {
        color: primary,
        fontWeight: "bold",
        justifyContent: "center",
        fontSize: 16,
    },
});