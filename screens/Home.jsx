import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import React from "react";
import styles from "./home.style";
import { Ionicons } from "@expo/vector-icons";
import Account from "../components/Account";
import DeliveryProgress from "../components/DeliveryProgress";
import Menu from "../components/Menu";
import Repurchase from "../components/Repurchase";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
      <ScrollView>
        <View style={styles.appBarWrapper}>
          {/* <StatusBar hidden /> */}
          <ImageBackground
            source={require("../assets/images/Rectangle28.png")}
            resizeMode="stretch"
            style={{ height: 249, width: 414 }}
          >
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <ImageBackground
                  source={require("../assets/images/Group14.png")}
                  resizeMode="stretch"
                  style={{ height: 27, width: 43 }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    alignItems: "center",
                    marginLeft: -37,
                  }}
                >
                  <Ionicons
                    name="search-outline"
                    size={20}
                    style={{ color: "#9D9D9D" }}
                  />
                  <TextInput
                    style={styles.textSearch}
                    value=""
                    onPressIn={() => {}}
                    placeholder="Tìm kiếm"
                  />
                </View>
                <View>
                  <Text></Text>
                </View>
              </View>
              <View style={styles.headerRight}>
                <View>
                  <View style={styles.notiCount}>
                    <Text style={styles.notiNumber}>01</Text>
                  </View>
                  <Ionicons
                    name="notifications-outline"
                    color={"#ffffff"}
                    size={30}
                  />
                </View>
                <Ionicons
                  style={{ marginLeft: 7 }}
                  name="cart-outline"
                  color={"#ffffff"}
                  size={30}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <Account />
        <DeliveryProgress />
        <Menu />
        <Repurchase />
        <BestSeller />
      </ScrollView>
  );
};

export default Home;
