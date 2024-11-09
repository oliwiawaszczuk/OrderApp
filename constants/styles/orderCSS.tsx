import {StyleSheet} from "react-native";
import {primary} from "@/constants/styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'rgba(244,245,247,0.71)',
    },
    historyLabel: {
        fontSize: 25,
        fontWeight: "bold",
        color: primary,
        marginTop: 30,
    },
    listContainer: {
        marginTop: 20,
    },
    container2: {
        marginHorizontal: 12,
        padding: 30,
        backgroundColor: "#F4F7FC",
    },
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
});