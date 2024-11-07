import React, { useEffect, useState } from "react";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import { Tab } from "@/constants/types/ITabs";
import { storage } from "@/api/store";
import {useRouter} from 'expo-router';
import {defaultIconColor, primary} from "@/constants/Colors";
import {Tabs} from "@/constants/data/TabsData";

const iconSize = 38;

export default function NavBar() {
    const router = useRouter();

    const changeTab = storage((state) => state.changeTab);
    const currentTab = storage((state) => state.currentTab);

    const [activeTab, setActiveTab] = useState<Tab | null>(currentTab);

    useEffect(() => {
        for (let tab of Tabs) {
            if (currentTab.label === tab.label) {
                changeTabFunc(tab);
                return;
            }
        }
    }, []);

    function changeTabFunc(tab: Tab) {
        setActiveTab(tab);
        changeTab(tab);
        // @ts-ignore
        router.navigate(`/${tab.path}`);
    }

    if (activeTab === null) {
        return (<Text>Loading</Text>);
    }

    return (
        <View style={styles.container}>
            {Tabs.map((tab, index) => (
                <TouchableOpacity key={index} style={styles.iconContainer} onPress={() => changeTabFunc(tab)}>
                    <MaterialCommunityIcons
                        name={tab.icon}
                        size={iconSize}
                        color={currentTab === tab ? primary : defaultIconColor}
                    />
                    <Text style={{ color: currentTab === tab ? primary : defaultIconColor }}>
                        {tab.label}
                    </Text>
                    <View style={[styles.selectedTabBorder, { backgroundColor: currentTab === tab ? primary : "#fff" }]} />
                </TouchableOpacity>
            ))}
        </View>
    );
}
// grid/3 | arrow
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 8,
    },
    iconContainer: {
        alignItems: "center",
    },
    selectedTabBorder: {
        width: "100%",
        height: 8,
        marginTop: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    }
});
