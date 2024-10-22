import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useRouter} from "expo-router";
import {renderOrderShortItem, orderShortData} from "@/components/renderOrderShortItem";

export default function Order() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create new order</Text>
            <Text style={styles.subHeader}>
                create new order create new order create new order create new order
            </Text>

            <TouchableOpacity style={styles.buttonPrimary} onPress={() => {router.navigate(`/order/createOrderScreen`);}}>
                <Text style={styles.buttonTextPrimary}>Make new project</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary} onPress={() => {router.navigate(`/order/useOldProject`);}}>
                <Text style={styles.buttonTextSecondary}>Use old project</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary} onPress={() => {router.navigate(`/order`);}}>
                <Text style={styles.buttonTextSecondary}>Do without project</Text>
            </TouchableOpacity>

            <FlatList
                data={orderShortData}
                renderItem={renderOrderShortItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f4f5f7',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    subHeader: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24,
        color: '#6e6e6e',
    },
    buttonPrimary: {
        backgroundColor: '#44494D',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonTextPrimary: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSecondary: {
        backgroundColor: '#d3d3d3',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonTextSecondary: {
        color: '#6e6e6e',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listContainer: {
        marginTop: 20,
    },
});
