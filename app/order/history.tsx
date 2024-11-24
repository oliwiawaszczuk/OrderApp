import {Modal, ScrollView, TouchableOpacity, View, StyleSheet, Text} from "react-native";
import {renderOrderItemsToList} from "@/components/renderOrderShortItem";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import React, {useState} from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {sortOptions} from "@/constants/types/sortOptions";
import {Sort, SortModal} from "@/components/Sort";

export default function OrderHistory() {
    const [isSortModalVisible, setSortModalVisible] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState(sortOptions.AtoZ);

    const toggleSortModal = () => {
        setSortModalVisible(!isSortModalVisible);
    };

    const selectSortOption = (option: sortOptions) => {
        setSelectedSortOption(option);
        setSortModalVisible(false);
        // sort
    };

    return (
        <>
            <HeaderAndSubheader header="Orders history" subheader=""/>
            <Sort selectedSortOption={selectedSortOption} toggleSortModal={toggleSortModal}/>
            {renderOrderItemsToList({})}
            <SortModal toggleSortModal={toggleSortModal} selectedSortOption={selectedSortOption} isSortModalVisible={isSortModalVisible} selectSortOption={selectSortOption}/>
        </>
    )
}