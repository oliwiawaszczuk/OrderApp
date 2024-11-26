import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from "react-native";
import {useRouter} from "expo-router";
import {logoImageSize} from "@/constants/sizes";
import {primary} from "@/constants/styles/Colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const Footer = () => {
    const router = useRouter();
    const openLink = async (url: string) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.error("Nie można otworzyć linku:", url);
        }
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => router.navigate("/home")} style={styles.logoContainer}>
                <Image source={require('../assets/images/icon.png')} style={styles.logoImage}/>
                <Text style={styles.logoText}>OrderFlow</Text>
            </TouchableOpacity>

            <View style={styles.socialIcons}>
                <TouchableOpacity onPress={() => openLink(facebook)} style={styles.containerIcon}>
                    <MaterialCommunityIcons name="facebook" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink(twitter)} style={styles.containerIcon}>
                    <MaterialCommunityIcons name="twitter" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink(instagram)} style={styles.containerIcon}>
                    <MaterialCommunityIcons name="instagram" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink(linkedin)} style={styles.containerIcon}>
                    <MaterialCommunityIcons name="linkedin" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.footerText}>
                <Text style={styles.copyright}>
                    Copyright © 2025 OrderFlow Agency | All Rights Reserved
                </Text>
                <View style={styles.links}>
                    <TouchableOpacity onPress={() => openLink(termsAndConditions)}>
                        <Text style={styles.link}>Terms and Conditions</Text>
                    </TouchableOpacity>
                    <Text style={styles.separator}> | </Text>
                    <TouchableOpacity onPress={() => openLink(privacyPolicy)}>
                        <Text style={styles.link}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#f8f9fa",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        alignItems: "center",
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    logoText: {
        fontWeight: "bold",
        fontSize: 20,
        color: primary,
    },
    socialIcons: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 15,
    },
    containerIcon: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        color: primary,
        fontSize: 22,
    },
    footerText: {
        alignItems: "center",
    },
    copyright: {
        fontSize: 12,
        color: "#6c757d",
        textAlign: "center",
        marginBottom: 5,
    },
    links: {
        flexDirection: "row",
        alignItems: "center",
    },
    link: {
        fontSize: 12,
        color: "#007bff",
        textDecorationLine: "underline",
    },
    separator: {
        fontSize: 12,
        color: "#6c757d",
        marginHorizontal: 5,
    },
    logoImage: {
        width: logoImageSize,
        height: logoImageSize,
    },
});
