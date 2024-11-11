import {StyleSheet} from "react-native";
import {primary} from "@/constants/styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
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
});