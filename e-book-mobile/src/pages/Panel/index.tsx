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
  data: any[];
}

import { View } from "react-native";
import React from "react";
import { YAxis, BarChart, Grid, XAxis } from "react-native-svg-charts";
import { Line } from "react-native-svg";

const Lines = ({ x, y, bandwidth, data }: Props) =>
  data.map((value: number, index: number) => (
    <Line
      key={index}
      x1={x(index) + bandwidth / 2}
      y1={y(value)}
      x2={
        data.length != index + 1
          ? x(index + 1) + bandwidth / 2
          : x(index) + bandwidth / 2
      }
      y2={data.length != index + 1 ? y(data[index + 1]) : y(value)}
      stroke={"#000"}
    ></Line>
  ));

const fill = "rgb(134, 65, 244)";
const data = [51, 18, 44, 89, 8];
const axesSvg = { fontSize: 10, fill: "grey" };
const verticalContentInset = { top: 10, bottom: 10, right: 10, left: 10 };
const xAxisHeight = 30;

const Panel = () => {
  return (
    <View style={{ height: 200, padding: 20, flexDirection: "row" }}>
      <YAxis
        data={data}
        style={{ marginBottom: xAxisHeight }}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />

      <View style={{ flex: 1, marginLeft: 10 }}>
        <BarChart
          style={{
            flex: 1,
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
          <Lines />
        </BarChart>
        <XAxis
          style={{ marginHorizontal: -10, height: xAxisHeight, marginTop: 5 }}
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
