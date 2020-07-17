import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Panel: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Hello</Text>
    </View>
  );
};

export default Panel;
