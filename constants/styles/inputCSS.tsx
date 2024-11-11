import {StyleSheet} from "react-native";
import {primary} from "@/constants/styles/Colors";

export const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        color: "#6A6E83",
        marginBottom: 6,
    },
    input: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        fontSize: 14,
        color: "#333333",
        marginBottom: 16,
    },
    textArea: {
        textAlignVertical: "top",
        minHeight: 20,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: primary,
        borderRadius: 8,
        paddingLeft: 4,
        backgroundColor: "rgba(244,245,247,0.71)",
    },
    icon: {
        paddingHorizontal: 16,
        color: primary,
        backgroundColor: "rgba(255,255,255)",
    },
    searchInput: {
        backgroundColor: "rgba(255,255,255,0)",
        borderColor: "rgba(255,255,255,0)",
        color: primary,
        flex: 1,
        fontSize: 16,
    },
});