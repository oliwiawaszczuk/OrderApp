import React from "react";
import {Text} from "react-native-paper";
import {View, Image, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {primary} from "@/constants/styles/Colors";
import {useRouter} from "expo-router";
import {styles} from "@/constants/styles/headerCSS";


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