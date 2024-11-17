import {Modal, ScrollView, TouchableOpacity, View, StyleSheet, Text} from "react-native";
import {renderOrderItemsToList} from "@/components/renderOrderShortItem";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import React, {useState} from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";

enum sortOptions {
    AtoZ = "Project Name - A to Z",
    ZtoA = "Project Name - Z to A",
    NewestFirst = "Order Date - Newest First",
    OldestFirst = "Order Date - Oldest First",
    EarliestFirst = "Delivery Date - Earliest First",
    LatestFirst = "Delivery Date - Latest First",
    Processing = "Status - Processing",
    Delivered = "Status - Delivered",
    Canceled = "Status - Canceled",
}

function Sort({toggleSortModal, selectedSortOption}: {toggleSortModal: any, selectedSortOption: any}) {
    return (
        <TouchableOpacity style={styles.sortButton} onPress={toggleSortModal}>
            <Text style={styles.sortText}>Sort by: {selectedSortOption}</Text>
        </TouchableOpacity>
    );
}

export default function OrderHistory(){
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
            <Modal
                visible={isSortModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleSortModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={toggleSortModal} style={styles.closeButton}>
                            <MaterialCommunityIcons name="close" size={24} color="#000" />
                        </TouchableOpacity>
                        {Object.values(sortOptions).map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={styles.option}
                                onPress={() => selectSortOption(option as sortOptions)}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
    sortButton: { marginBottom: 16, padding: 10, backgroundColor: "#ddd", borderRadius: 8 },
    sortText: { fontSize: 16 },
    listContainer: { paddingBottom: 100 },
    orderItem: {
        padding: 16,
        backgroundColor: "#f9f9f9",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 10,
        borderRadius: 8,
    },
    dateText: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
    iconsContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    iconText: { fontSize: 14, color: "#333" },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 16,
        alignItems: "center",
    },
    closeButton: { alignSelf: "flex-end", marginBottom: 10 },
    option: { padding: 10, width: "100%", alignItems: "center" },
    optionText: { fontSize: 18, color: "#000" },
})