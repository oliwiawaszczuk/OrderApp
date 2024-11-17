import {StyleSheet} from "react-native";
import {primary} from "@/constants/styles/Colors";

export const iconSize = 24;
export const iconColor = primary;

export const stylesProjectItems = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 40,
    },
    listItem: {
        paddingVertical: 15,
        marginBottom: 10,
    },
    dateText: {
        fontSize: 15,
        color: primary,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginBottom: 8,
        fontWeight: 'bold',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    infoColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
    },
    infoText: {
        color: iconColor,
        marginLeft: 10,
        fontSize: 14,
    },
    arrowIcon: {
        padding: 6,
        backgroundColor: iconColor,
        borderRadius: 6,
    },
});