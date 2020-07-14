import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 16,
  },

  main: {
    marginTop: 48,
  },

  textEmail: {
    fontSize: 16,
    paddingTop: 8,
    paddingLeft: 8,
    fontFamily: "Roboto_500Medium",
  },
  textPassword: {
    fontSize: 16,
    paddingTop: 8,
    paddingLeft: 8,
    fontFamily: "Roboto_500Medium",
  },
  textTitle: {
    textAlign: "left",
    padding: 8,
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
  },

  textSubTitle: {
    padding: 8,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  textInputEmail: {
    padding: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  textInputPassword: {
    padding: 8,
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
    height: 40,
    width: 80,
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
  footer: {
    marginTop: 32,
    padding: 8,
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
    padding: 32,
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default styles;
