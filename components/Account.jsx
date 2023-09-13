import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const Account = () => {
  return (
    <View style={styles.user}>
      <LinearGradient
        colors={["#00C366", "#13844E", "#046436"]}
        style={styles.gradient}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 38,
            marginVertical: 12,
          }}
        >
          <View style={styles.avatar}></View>
          <View style={{ marginLeft: 7 }}>
            <Text style={{ fontSize: 15, fontWeight: 400, color: "#FFFFFF" }}>
              Tên Đại lý
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 400, color: "#FFFFFF" }}>
              Phân cấp Đại lý
            </Text>
          </View>
          <View style={styles.acquaintance}>
            <ImageBackground
              source={require("../assets/images/friend.png")}
              resizeMode="stretch"
              style={{ height: 30, width: 30 }}
            />
            <Text
              style={{
                fontWeight: 400,
                fontSize: 12,
                color: "#13844E",
              }}
            >
              Giới thiệu{"\n"} bạn bè
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  user: {
    position: "relative",
    width: 414,
    height: 77,
  },
  gradient: {
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  acquaintance: {
    position: "absolute",
    display: "flex",
    flexDirection:'row',
    justifyContent: "space-around",
    alignItems: "center",
    right: 0,
    top: -25,
    paddingHorizontal: 4,
   paddingVertical:4,
    borderRadius: 8,
    backgroundColor:'#ffffff'
  },
});

export default Account
