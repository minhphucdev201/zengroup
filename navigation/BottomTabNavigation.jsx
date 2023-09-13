import { Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Cart, Home, Product, Profile } from "../screens";
import { LinearGradient } from "expo-linear-gradient";
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarLabelStyle: {
    color: "#13844E",
    fontSize: 12,
    marginTop:0,
   
  },
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    paddingBottom: 10,
  },
};


const tabActived = (label, focused) => {
  return <Text
              style={{
                color: "#13844E",
                fontWeight: focused ? '600' : "400",
              }}
            >
             {label}
            </Text>
}
const BottomTabNavigation = () => {
  return (
    
    

        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Trang chủ"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons
                    name={focused ? "home" : "home-outline"}
                    size={24}
                    color={focused ? "#13844E" : "#C1C0C8"}
                  />
                );
              },
              tabBarLabel: ({ focused }) => tabActived("Trang chủ", focused),
            }}
          />
          <Tab.Screen
            name="Sản phẩm"
            component={Product}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons
                    name={focused ? "file-tray" : "file-tray-outline"}
                    size={24}
                    color={focused ? "#13844E" : "#C1C0C8"}
                  />
                );
              },
              tabBarLabel: ({ focused }) => tabActived("Sản phẩm", focused),
            }}
          />
          <Tab.Screen
            name="Đơn hàng"
            component={Cart}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons
                    name={focused ? "cart" : "cart-outline"}
                    size={24}
                    color={focused ? "#13844E" : "#C1C0C8"}
                  />
                );
              },
              tabBarLabel: ({ focused }) => tabActived("Đơn hàng", focused),
            }}
          />
          <Tab.Screen
            name="Cá nhân"
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Ionicons
                    name={focused ? "person" : "person-outline"}
                    size={24}
                    color={focused ? "#13844E" : "#C1C0C8"}
                  />
                );
              },
              tabBarLabel: ({ focused }) => tabActived("Cá nhân", focused),
            }}
          />
        </Tab.Navigator>
      
    
  );
};

export default BottomTabNavigation;
