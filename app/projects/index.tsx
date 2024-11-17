import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useRouter} from "expo-router";
import {styles} from "@/constants/styles/orderCSS";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {renderProjectShortItem} from "@/components/renderProjectShortItem";
import {projectShortData} from "@/assets/examplesData/Projects";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {SearchInput} from "@/components/forms/Input";
import Space from "@/components/Space";

export default function Project() {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {

    }, [searchText])

    function redirectToProjectDetail(id: string) {
        router.navigate(`/projects/${id}`)
    }

    return (
        <View style={styles.container}>
            <HeaderAndSubheader header={"Projects"} subheader={"Stay organized with project details and management: create, update, and track all aspects of your construction projects!"}/>

            <PrimaryButton text="Order History" onPressFunc={() => {router.navigate(`/order/history`)}}/>
            <Space height={12}/>
            <SearchInput get={searchText} set={setSearchText}/>

           <FlatList
                data={projectShortData}
                renderItem={({ item }) => renderProjectShortItem({
                    item,
                    onpress: () => redirectToProjectDetail(item.id.toString())
                })}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}
