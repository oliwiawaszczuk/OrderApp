import {StyleSheet} from "react-native";
import {primary} from "@/constants/styles/Colors";

export const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        color: primary,
        fontWeight: "bold",
        textAlign: 'center',
    },
    subText: {
        textAlign: 'center',
        color: primary,
        fontSize: 16,
        marginTop: 8,
    },
});