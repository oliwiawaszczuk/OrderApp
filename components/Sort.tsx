import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {down_arrow_triangle} from "@/constants/icons";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {sortOptions} from "@/constants/types/sortOptions";

export function Sort({toggleSortModal, selectedSortOption}: { toggleSortModal: any, selectedSortOption: any }) {
    return (
        <TouchableOpacity style={styles.sortButton} onPress={toggleSortModal}>
            <Text style={styles.sortText}>Sort by: {selectedSortOption}</Text>
            <Text>{down_arrow_triangle}</Text>
        </TouchableOpacity>
    );
}

export function SortModal({toggleSortModal, selectedSortOption, isSortModalVisible, selectSortOption}: { toggleSortModal: any, selectedSortOption: any, isSortModalVisible: any, selectSortOption: any }) {
    return (
        <Modal
            visible={isSortModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={toggleSortModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={toggleSortModal} style={styles.closeButton}>
                        <MaterialCommunityIcons name="close" size={24} color="#000"/>
                    </TouchableOpacity>
                    {Object.values(sortOptions).map((option) => (
                        <TouchableOpacity
                            key={option}
                            style={styles.option}
                            onPress={() => selectSortOption(option as sortOptions)}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                            <MaterialCommunityIcons size={22} name={option === selectedSortOption ? "radiobox-marked" : "radiobox-blank"}/>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff"
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    },
    sortButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        padding: 10,
        backgroundColor: "rgba(159,97,97,0)",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#333",
    },
    sortText: {
        fontSize: 16
    },
    listContainer: {
        paddingBottom: 100
    },
    orderItem: {
        padding: 16,
        backgroundColor: "#f9f9f9",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 10,
        borderRadius: 8,
    },
    dateText: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    iconText: {
        fontSize: 14,
        color: "#333"
    },
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
    closeButton: {
        alignSelf: "flex-end",
        marginBottom: 10
    },
    option: {
        padding: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
    },
    optionText: {
        fontSize: 16,
        color: "#000"
    },
})