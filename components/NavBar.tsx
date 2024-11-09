import React, { useEffect, useState } from "react";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {View, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import { Tab } from "@/constants/types/ITabs";
import { storage } from "@/api/store";
import {useRouter} from 'expo-router';
import {defaultIconColor, primary} from "@/constants/styles/Colors";
import {Tabs} from "@/constants/data/TabsData";
import {styles} from "@/constants/styles/navBarCSS";

const iconSize = 38;

const gap = 2;
const numCols = 3;
// const sizeForIcon = (screenWidth / numCols) - (gap * (numCols+1) / numCols);

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

