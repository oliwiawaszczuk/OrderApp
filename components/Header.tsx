import React from "react";
import {Text} from "react-native-paper";
import {View, Image, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {primary} from "@/constants/styles/Colors";
import {useRouter, usePathname} from "expo-router";
import {styles} from "@/constants/styles/headerCSS";

export default function Header() {
    const router = useRouter();

    const pathname = usePathname();  // Używamy usePathname, by dostać ścieżkę URL

    if (!pathname) {
        return null;  // Jeśli pathname jest niezdefiniowane, zwróć null (lub placeholder)
    }

    // Dzielimy ścieżkę URL na segmenty
    const pathSegments = pathname.split("/").filter(Boolean);

    // Funkcja do generowania linków breadcrumb
    const generateBreadcrumbs = () => {
        const crumbs: JSX.Element[] = [];
        let currentPath = "/";

        // Iterujemy po segmentach ścieżki i generujemy linki
        pathSegments.forEach((segment, index) => {
            currentPath += `${segment}/`;
            crumbs.push(
                <View key={index} style={{flexDirection: "row", alignItems: "center"}}>
                    {index < pathSegments.length - 1 ? (
                        <TouchableOpacity onPress={() => router.push(currentPath)}>
                            <Text style={{color: "blue"}}>{segment}</Text>
                        </TouchableOpacity>
                    ) : (
                        <Text>{segment}</Text>
                    )}
                    {index < pathSegments.length - 1 && <Text> / </Text>}
                </View>
            );
        });

        return crumbs;
    };

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => router.navigate("/home")} style={styles.flexRowJustBetween}>
                    <Image source={require('../assets/images/icon.png')} style={styles.logoImage}/>
                    <Text style={styles.logoText}>OrderFlow</Text>
                </TouchableOpacity>
                <View style={styles.flexRowJustBetween}>
                    <MaterialCommunityIcons onPress={() => router.navigate("/menuHeader")} name="bell" size={24}
                                            color={primary} style={styles.icon}/>
                    <MaterialCommunityIcons onPress={() => router.navigate("/menuHeader")} name="menu" size={24}
                                            color={primary} style={styles.icon}/>
                </View>
            </View>
            {/*<Text>Breadcrumbs:</Text>*/}
            {/*{generateBreadcrumbs()}*/}
        </>
    );
}