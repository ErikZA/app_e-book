import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe19c",
    justifyContent: "center",
    alignItems: "center",
  },
  textEmail: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  textPassword: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  textInputEmail: {
    padding: 8,
    height: 50,
    width: 180,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  textInputPassword: {
    padding: 8,
    height: 50,
    width: 180,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
});

export default styles;
