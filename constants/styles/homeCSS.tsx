import {StyleSheet} from "react-native";
import {primary} from "@/constants/styles/Colors";

export const stylesHome = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    fundsCard: {
        backgroundColor: primary,
        padding: 8,
        borderRadius: 20,
    },
    fundsText: {
        color: '#fff',
        fontSize: 16,
    },
    fundsAmount: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
});