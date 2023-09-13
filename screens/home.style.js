import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appBarWrapper: {},
  header: {
    width: "100%",
    position: "absolute",
    top: 61,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 20,
    width: 292,
    height: 42,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  searchInput: {
    display: "flex",
  },
  textSearch: {
    color: "#9D9D9D",
    fontWeight: "300",
    fontSize: 12,
    marginLeft: 9,
  },
  headerRight: {
    width: "25%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  notiCount: {
    position: "absolute",
    left: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#EC3237",
    justifyContent: "center",
    zIndex: 999,
  },
  notiNumber: {
    fontWeight: "600",
    fontSize: 12,
    color: "#ffffff",
  },
  
});

export default styles;