import {StyleSheet} from "react-native";

export const iconSize = 24;
export const iconColor = "#99A1B3";

export const stylesProjectItems = StyleSheet.create({
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