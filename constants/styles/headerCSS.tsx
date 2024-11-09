import {StyleSheet} from "react-native";
import {logoImageSize} from "@/constants/sizes";
import {primary} from "@/constants/styles/Colors";

export const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    flexRowJustBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        padding: 12,
    },
    logoImage: {
        width: logoImageSize,
        height: logoImageSize,
    },
    logoText: {
        fontWeight: "bold",
        fontSize: 16,
        color: primary,
    },
});