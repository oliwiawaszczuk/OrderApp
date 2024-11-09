import {StyleSheet} from "react-native";
import {primary} from "@/constants/styles/Colors";

export const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        padding: 10,
    },
    dateText: {
        fontSize: 15,
        color: primary,
        fontWeight: "bold",
        marginBottom: 8,
        borderBottomWidth: 3,
        borderBottomColor: primary,
        width: '100%',
        justifyContent: 'flex-start',
    },
    iconsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'flex-start',
    },
    gridItem: {
        flexDirection: 'row',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 4,
    },
    iconsText: {
        fontSize: 13,
        paddingLeft: 4,
        paddingRight: 18,
        borderBottomColor: primary,
    },
});