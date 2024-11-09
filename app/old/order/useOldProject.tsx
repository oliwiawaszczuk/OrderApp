import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "@/constants/styles/orderCSS";
import React, {useEffect} from "react";
import {renderProjectShortItem} from "@/components/renderProjectShortItem";
import HeaderAndSubheader from "@/components/HeaderAndSubheader";
import {projectShortData} from "@/assets/examplesData/Projects";

export default function useOldProject() {
    return (
        <View style={styles.container}>
            <HeaderAndSubheader header={"Use old project"} subheader={"Choose the project you’d like to add this order to, then customize products, suppliers, and delivery details to keep everything aligned!"}/>
            <FlatList
                data={projectShortData}
                renderItem={renderProjectShortItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}
