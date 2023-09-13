import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
const DeliveryProgress = () => {
  return (
    <View style={styles.orderMain}>
      <View style={{ backgroundColor: "#FFFFFF" }}>
        <View style={styles.deliveryTitle}>
          <View style={styles.datepicker}>
            <Ionicons name="calendar-outline" size={12} color={"#0089C4"} />
            <Text style={{ color: "#0089C4", paddingLeft: 3, fontSize: 12 }}>
              Chọn phạm vi ngày/Hôm nay
            </Text>
          </View>
          <View style={styles.orderHistory}>
            <Text style={{ color: "#0089C4", fontSize: 12 }}>
              Xem lịch sử đơn hàng
              <Ionicons
                name="chevron-forward-outline"
                size={12}
                color={"#0089C4"}
              />
            </Text>
          </View>
        </View>
        <View style={styles.deliveryProcess}>
          <View style={styles.item}>
            <Text
              style={{ fontFamily: "bold", color: "#EC3237", fontSize: 14 }}
            >
              03
            </Text>
            <Text
              style={{
                fontWeight: 400,
                color: "#000000",
                opacity: 0.7,
                fontSize: 12,
              }}
            >
              Chờ xác nhận
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{ fontFamily: "bold", color: "#13844E", fontSize: 14 }}
            >
              02
            </Text>
            <Text
              style={{
                fontWeight: 400,
                color: "#000000",
                opacity: 0.7,
                fontSize: 12,
              }}
            >
              Đang giao
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{ fontFamily: "bold", color: "#13844E", fontSize: 14 }}
            >
              08
            </Text>
            <Text
              style={{
                fontWeight: 400,
                color: "#000000",
                opacity: 0.7,
                fontSize: 12,
              }}
            >
              Đã giao
            </Text>
          </View>
          <View style={styles.item}>
            <Text
              style={{ fontFamily: "bold", color: "#13844E", fontSize: 14 }}
            >
              02
            </Text>
            <Text
              style={{
                fontWeight: 400,
                color: "#000000",
                opacity: 0.7,
                fontSize: 12,
              }}
            >
              Đơn hủy
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  orderMain: {
    // marginHorizontal: 20,
    // marginVertical: 10,
  },
  deliveryTitle: {
      marginHorizontal: 20,
      marginTop:11,
      marginBottoKm:11,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  datepicker: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  deliveryProcess: {
    marginHorizontal: 20,
    marginTop: 11,
    marginBottom: 11,
      display: "flex",
    // paddingRight:3,
    // paddingLeft:3,
    flexDirection: "row",
    // flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    // marginRight: 6,
    alignItems: "center",
    width: 83,
    height: 56,

    backgroundColor: "#EFEFEF",
    borderRadius: 4,
  },
});
export default DeliveryProgress