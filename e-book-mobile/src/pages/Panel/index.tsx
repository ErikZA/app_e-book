// import React from "react";
// import { useNavigation } from "@react-navigation/native";

// import styles from "./styles";
// import { Props } from "../../typeRoute";

// const Panel = ({ navigation, route }: Props) => {
//   const { name } = route.params;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.mainText}>Hello</Text>
//       <Text style={styles.mainText}>{name}</Text>
//     </View>
//   );
// };

// export default Panel;

interface Props {
  x: any;
  y: any;
  bandwidth: any;
  data: any;
}

import { View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  YAxis,
  BarChart,
  Grid,
  XAxis,
} from "react-native-svg-charts";
import { Text } from "react-native-svg";

const CUT_OFF = 20;
const Labels = ({ x, y, bandwidth, data }: Props) =>
  data.map((value: any, index: number) => (
    <Text
      key={index}
      x={x(index) + bandwidth / 2}
      y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
      fontSize={12}
      fill={value >= CUT_OFF ? "white" : "black"}
      alignmentBaseline={"middle"}
      textAnchor={"middle"}
    >
      {value}
    </Text>
  ));

const fill = "rgb(134, 65, 244)";
const data = [51, 18, 44, 89, 8];
const axesSvg = { fontSize: 10, fill: "grey" };
const verticalContentInset = { top: 10, bottom: 10, right: 10, left: 10 };
const xAxisHeight = 30;

const Panel = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(false);
  }, []);
  return (
    <View style={{ height: 200, padding: 20, flexDirection: "row" }}>
      <YAxis
        data={data}
        style={{ marginBottom: xAxisHeight }}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />

      <View style={{ flex: 1, marginLeft: 10 }}>
        <LineChart
          style={{ flex: 1 }}
          data={data}
          gridMin={0}
          contentInset={verticalContentInset}
          svg={{ stroke: "rgb(134, 65, 244)" }}
        >
          <Grid />
        </LineChart>
        <BarChart
          style={{
            flex: 1,
            position: load ? "relative" : "absolute",
            marginHorizontal: 0,
            height: 110,
            marginTop: 10,
          }}
          spacingInner={0.75}
          spacingOuter={0.05}
          data={data}
          svg={{ fill }}
          gridMin={0}
        >
          <Grid />
          <Labels />
        </BarChart>
        <XAxis
          style={{ marginHorizontal: -10, height: xAxisHeight }}
          data={data}
          formatLabel={(value, index) => `${index + 1} Mês`}
          contentInset={{ left: 24, right: 24 }}
          svg={axesSvg}
        />
      </View>
    </View>
  );
};

export default Panel;
