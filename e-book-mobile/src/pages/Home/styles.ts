import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe19c",
  },

  main: {
    padding: 32,
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    maxWidth: 100,
    maxHeight: 100,
  },
  mainText: {
    flex: 1,
    padding: 32,
    color: "#323153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
  },

  imageFox: {
    maxWidth: 320,
    maxHeight: 405,
  },
  mainFox: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
  },
  footer: {},
  button: {},
  buttonIcon: {},
  buttonText: {},
});

export default styles;
