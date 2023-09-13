import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Menu = () => {
  return (
    <LinearGradient
      colors={["#079c54", "#07924f", "#079c54", "#07924f", "#079c54"]}
    >
      <View style={styles.main}>
        <View style={styles.boxTop}>
          <View style={styles.box}>
            <View style={styles.boxItem}>
              <View style={styles.item}>
                <ImageBackground
                  source={require("../assets/images/taodonhang.png")}
                  resizeMode="stretch"
                  style={{ height: 38, width: 38 }}
                />
              </View>
              <Text style={styles.boxTitle}>Tạo đơn hàng</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxItem}>
              <View style={styles.item}>
                <ImageBackground
                  source={require("../assets/images/Layer_1-4.png")}
                  resizeMode="stretch"
                  style={{ height: 38, width: 38 }}
                />
              </View>
              <Text style={styles.boxTitle}>Giỏ hàng</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxItem}>
              <View style={styles.item}>
                <ImageBackground
                  source={require("../assets/images/Layer_1-1.png")}
                  resizeMode="stretch"
                  style={{ height: 38, width: 38 }}
                />
              </View>
              <Text style={styles.boxTitle}>Khách hàng</Text>
            </View>
          </View>
        </View>
        {/* boxBottom */}
        <View style={styles.botBottom}>
          <View style={styles.box}>
            <View style={styles.boxItem}>
              <View style={styles.item}>
                <ImageBackground
                  source={require("../assets/images/Layer_1-2.png")}
                  resizeMode="stretch"
                  style={{ height: 38, width: 38 }}
                />
              </View>
              <Text style={styles.boxTitle}>Hiệu quả bán hàng</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxItem}>
              <View style={styles.item}>
                <ImageBackground
                  source={require("../assets/images/Layer_1.png")}
                  resizeMode="stretch"
                  style={{ height: 38, width: 38 }}
                />
              </View>
              <Text style={styles.boxTitle}>Công nợ</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.boxItem}>
              <View style={styles.item}>
                <ImageBackground
                  source={require("../assets/images/Layer_1-3.png")}
                  resizeMode="stretch"
                  style={{ height: 38, width: 38 }}
                />
              </View>
              <Text style={styles.boxTitle}>Trung tâm hỗ trợ</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  main: {
    width: 414,
    height: 234,
  },
  boxTop: {
    width: 414,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  botBottom: {
    width: 414,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  boxTitle: {
    marginTop: 4,
    color: "#FFFFFF",
    fontFamily: "medium",
    fontSize: 12,
  },
  box: {
    width: "100%",
    marginRight: 20,
    height: 82,
    marginTop: 29,
  },
  boxItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  item: {
    width: 64,
    height: 64,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Menu;
