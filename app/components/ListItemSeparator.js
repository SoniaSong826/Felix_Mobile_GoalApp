import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}
const styles = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: colors.white,
  },
});

export default ListItemSeparator;
