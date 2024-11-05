import {StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

const iconSize = 24;
const iconColor = "#99A1B3";

interface projectShortItem {
    id: string,
    data: string,
    projectName: string,
    leader: string,
    localisation: string,
}

export const projectShortData: projectShortItem = [
    {id: '1', date: '21/10/2025', projectName: "name1", leader: "leader1", localisation: "localisation1"},
    {id: '2', date: '21/11/2025', projectName: "name2", leader: "leader2", localisation: "localisation2"},
    {id: '3', date: '22/11/2025', projectName: "name3", leader: "leader3", localisation: "localisation3"},
    {id: '4', date: '23/12/2025', projectName: "name4", leader: "leader4", localisation: "localisation4"},
    {id: '5', date: '11/01/2026', projectName: "name5", leader: "leader5", localisation: "localisation5"},
    {id: '6', date: '04/02/2026', projectName: "name6", leader: "leader6", localisation: "localisation6"},
    {id: '7', date: '01/03/2026', projectName: "name7", leader: "leader7", localisation: "localisation7"},
    {id: '8', date: '13/04/2026', projectName: "name8", leader: "leader8", localisation: "localisation8"},
];

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