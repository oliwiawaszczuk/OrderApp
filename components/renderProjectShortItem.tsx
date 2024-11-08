import {StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {projectShortItem} from "@/assets/examplesData/Projects";

const iconSize = 24;
const iconColor = "#99A1B3";


export const renderProjectShortItem = ({ item }: { item: projectShortItem }) => (
  <View style={styles.listItem}>
    <Text style={styles.dateText}>{item.date}</Text>

    <View style={styles.infoContainer}>
      <View style={styles.infoColumn}>
        <View style={styles.infoRow}>
          <MaterialCommunityIcons name="folder" size={iconSize} color={iconColor} />
          <Text style={styles.infoText}>{item.projectName}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialCommunityIcons name="account" size={iconSize} color={iconColor} />
          <Text style={styles.infoText}>{item.leader}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialCommunityIcons name="map-marker" size={iconSize} color={iconColor} />
          <Text style={styles.infoText}>{item.localisation}</Text>
        </View>
      </View>
      <MaterialCommunityIcons name="arrow-right" size={iconSize-8} color="white" style={styles.arrowIcon} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    paddingHorizontal: 40,
  },
  listItem: {
    paddingVertical: 15,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 12,
    color: '#99A1B3',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  infoColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  infoText: {
    color: iconColor,
    marginLeft: 10,
    fontSize: 14,
  },
  arrowIcon: {
    padding: 6,
    backgroundColor: '#6A6E83',
    borderRadius: 6,
  },
});