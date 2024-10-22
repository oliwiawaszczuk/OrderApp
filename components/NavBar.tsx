import React, { useEffect, useState } from "react";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';
import { Tab, Tabs } from "@/api/Tabs";
import { storage } from "@/api/store";
import {useRouter} from 'expo-router';

const iconSize = 38;

export default function NavBar() {
    const router = useRouter();

    const changeTab = storage((state) => state.changeTab);
    const currentTab = storage((state) => state.currentTab);

    const [activeTab, setActiveTab] = useState<Tab | null>(currentTab);

    const backgroundColor = useThemeColor({}, 'background');
    const defaultIconColor = useThemeColor({}, 'tabIconDefault');
    const selectedIconColor = useThemeColor({}, 'tabIconSelected');

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
                        color={currentTab === tab ? selectedIconColor : defaultIconColor}
                    />
                    <Text style={{ color: currentTab === tab ? selectedIconColor : defaultIconColor }}>
                        {tab.label}
                    </Text>
                    <View style={[styles.selectedTabBorder, { backgroundColor: currentTab === tab ? selectedIconColor : backgroundColor }]} />
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
