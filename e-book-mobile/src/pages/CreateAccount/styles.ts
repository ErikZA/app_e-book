import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  containerScroll: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  textEmail: {
    fontSize: 16,
    paddingLeft: 8,
    fontFamily: "Roboto_500Medium",
  },
  textPassword: {
    fontSize: 16,
    paddingLeft: 8,
    fontFamily: "Roboto_500Medium",
  },
  textTitle: {
    textAlign: "left",
    paddingHorizontal: 8,
    paddingTop: 32,
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
  },

  textSubTitle: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  textInputEmail: {
    paddingHorizontal: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  textInputPassword: {
    paddingHorizontal: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D2DFFF",
    height: 50,
    borderRadius: 24,
    overflow: "hidden",
  },

  buttonIcon: {
    height: 50,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#4E67A8",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    paddingRight: 40,
  },
  buttonLink: {
    backgroundColor: "transparent",
    height: 30,
    width: 72,
    padding: 8,
    flexDirection: "row",
    borderRadius: 32,
    overflow: "hidden",
    alignItems: "center",
  },
  footerText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "right",
    color: "#000",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  textInputName: {
    fontSize: 16,
    paddingLeft: 8,
    fontFamily: "Roboto_500Medium",
  },
  footer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  buttonTextCreate: {
    flex: 1,
    justifyContent: "center",
    textAlign: "left",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    color: "#4E67A8",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  mainFooter: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  spinnerTextStyle: {
    fontFamily: "Roboto_400Regular",
    color: "#000",
    fontSize: 24,
    alignItems: "center",
  },
});

export default styles;
