import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe19c",
  },

  main: {
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  section: {
    flex: 1,
    paddingBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: 90,
    maxHeight: 90,
  },
  textWelcome: {
    flex: 1,
    paddingLeft: 40,
    color: "#323153",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    maxWidth: 260,
  },
  mainText: {
    flex: 1,
    paddingRight: 32,
    paddingLeft: 8,
    paddingTop: 32,
    color: "#323153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
  },

  imageFox: {
    maxWidth: 360,
    maxHeight: 578,
  },
  mainFox: {
    flex: 1,
    paddingBottom: 48,
    justifyContent: "center",
  },
  mainButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
    paddingLeft: 24,
    paddingRight: 24,
  },
  footer: {
    paddingLeft: 64,
    paddingRight: 64,
    paddingBottom: 16,
  },

  buttonSkip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D2DFFF",
    height: 50,
    width: 150,
    margin: 8,
    borderRadius: 24,
    overflow: "hidden",
  },

  buttonTextSkip: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#4E67A8",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF5F54",
    height: 50,
    width: 150,
    margin: 8,
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
    color: "#580600",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  buttonLink: {
    backgroundColor: "transparent",
    height: 40,
    width: 220,
    padding: 8,
    flexDirection: "row",
    borderRadius: 32,
    overflow: "hidden",
    alignItems: "center",
  },
  footerText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#323153",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

export default styles;
