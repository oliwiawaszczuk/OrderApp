import React from "react";
import {Text} from "react-native-paper";
import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {primary, logoImageSize} from "@/constants/Colors";
import {useRouter} from "expo-router";


export default function Header() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.navigate("/home")} style={styles.flexRowJustBetween}>
                <Image source={require('../assets/images/icon.png')} style={styles.logoImage}/>
                <Text style={styles.logoText}>OrderFlow</Text>
            </TouchableOpacity>
            <View style={styles.flexRowJustBetween}>
                <MaterialCommunityIcons onPress={() => router.navigate("/menuHeader")} name="bell" size={24} color={primary} style={styles.icon} />
                <MaterialCommunityIcons onPress={() => router.navigate("/menuHeader")} name="menu" size={24} color={primary} style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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