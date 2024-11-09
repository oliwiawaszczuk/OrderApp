import {StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {Project} from "@/assets/examplesData/Projects";
import {iconColor, iconSize, stylesProjectItems} from "@/constants/styles/projectItemsCSS";


export const renderProjectShortItem = ({ item }: { item: Project }) => (
  <View style={stylesProjectItems.listItem}>
    <Text style={stylesProjectItems.dateText}>{item.date}</Text>

    <View style={stylesProjectItems.infoContainer}>
      <View style={stylesProjectItems.infoColumn}>
        <View style={stylesProjectItems.infoRow}>
          <MaterialCommunityIcons name="folder" size={iconSize} color={iconColor} />
          <Text style={stylesProjectItems.infoText}>{item.projectName}</Text>
        </View>
        <View style={stylesProjectItems.infoRow}>
          <MaterialCommunityIcons name="account" size={iconSize} color={iconColor} />
          <Text style={stylesProjectItems.infoText}>{item.leader}</Text>
        </View>
        <View style={stylesProjectItems.infoRow}>
          <MaterialCommunityIcons name="map-marker" size={iconSize} color={iconColor} />
          <Text style={stylesProjectItems.infoText}>{item.localisation}</Text>
        </View>
      </View>
      <MaterialCommunityIcons name="arrow-right" size={iconSize-8} color="white" style={stylesProjectItems.arrowIcon} />
    </View>
  </View>
);