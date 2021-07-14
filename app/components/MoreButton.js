import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import TitleText from "./TitleText";

function MoreButton({ title, style, onPress, textStyle }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <TitleText style={[styles.button,textStyle]}>{title}</TitleText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    fontSize:20,
  }
});

export default MoreButton;
