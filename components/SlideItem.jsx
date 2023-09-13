import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { formatPrice } from './../utils/common';

const { width, height } = Dimensions.get('screen');
const SlideItem = ({ item }) => {
  return (
    <View style={[styles.sectionItem, styles.shadowProp]}>
      <View style={styles.thumbnailUrl}>
        <ImageBackground
          source={{ uri: item.thumbnailUrl }}
          style={{ width: 155, height: 121 }}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.favourite}>
        <ImageBackground
          source={require("../assets/images/Vector.png")}
          style={{ width: 24, height: 20 }}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.inforProduct}>
        <Text style={styles.titleProduct}>{item.title}</Text>
        <Text style={styles.priceProduct}>{item.priceOriginal} VND</Text>
        <Text style={styles.pricelSi}>
          Giá sỉ đề xuất:{" "}
          <Text
            style={{ fontSize: 11, fontFamily: "medium", color: "#55C1E3" }}
          >
            {formatPrice(item.priceLe)}
          </Text>
        </Text>
        <Text style={styles.pricelLe}>
          Giá lẻ đề xuất:{" "}
          <Text
            style={{ fontSize: 11, fontFamily: "medium", color: "#55C1E3" }}
          >
            {formatPrice(item.priceSi)}
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default SlideItem

const styles = StyleSheet.create({

  shadowProp: {
    shadowColor: "#000000",
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
    marginBottom: 22,
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