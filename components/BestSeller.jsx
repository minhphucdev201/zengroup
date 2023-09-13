import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Slider from "./Slider";

const BestSeller = () => {
  return (
    <View style={styles.sectionReBuy}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 7,
        }}
      >
        <Text
          style={{
            color: "#13844E",
            fontSize: 12,
            fontFamily: "light",
          }}
        >
          Bán chạy
        </Text>
        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 50,
            marginLeft: 5,
          }}
        >
          <Ionicons name="chevron-down-outline" size={14} />
        </View>
      </View>
      <View style={styles.sectionMain}>
        <Slider />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionMain: {
    position: "relative",
    marginBottom: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  favourite: {
    position: "absolute",
    top: 3,
    right: 3,
  },
  sectionItem: {
    width: 155,
    height: 205,
    marginRight: 9,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },
  sectionReBuy: {
    marginTop: 18,
    marginHorizontal: 20,
  },
  cheronDown: {
    color: "#ffffff",
    width: 15,
    height: 15,
  },
  inforProduct: {
    marginVertical: 4,
    marginHorizontal: 4,
  },
  titleProduct: {
    fontSize: 11,
    fontFamily: "medium",
  },
  priceProduct: {
    color: "#EC3237",
    fontSize: 11,
    fontFamily: "medium",
  },
  pricelSi: {
    fontSize: 11,
    fontFamily: "light",
    color: "#6F6F6F",
  },
  pricelLe: {
    fontSize: 11,
    fontFamily: "light",
    color: "#6F6F6F",
  },
});
export default BestSeller;
