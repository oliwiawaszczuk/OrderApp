import {StyleSheet} from "react-native";
import {backgroundColor, primary} from "@/constants/styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
        backgroundColor: backgroundColor,
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
        paddingHorizontal: 12,
        padding: 30,
        paddingTop: 0,
        backgroundColor: backgroundColor,
    },
});