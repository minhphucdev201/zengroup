import { StyleSheet } from "react-native";
export default function MyTabBarLabel(props) {
  return (
    <WFText
      style={[
        styles.tabBarLabel,
        props.focused ? styles.tabBarLabelActive : {},
      ]}
    >
      {props.title}
    </WFText>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    paddingBottom: 6,
    fontSize: 10,
    textAlign: "center",
  },
  tabBarLabelActive: {
    color: "red",
  },
});
