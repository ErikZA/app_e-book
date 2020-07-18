import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Props } from "../../typeRoute";

const Panel = ({ navigation, route }: Props) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Hello</Text>
      <Text style={styles.mainText}>{name}</Text>
    </View>
  );
};

export default Panel;
