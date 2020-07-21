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
import React from "react";
import { YAxis, BarChart, Grid, XAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";
import { Text } from "react-native-svg";

const fill = "rgb(134, 65, 244)";

const data = [
  {
    value: 50,
    label: "One",
  },
  {
    value: 10,
    label: "Two",
  },
  {
    value: 40,
    label: "Three",
  },
  {
    value: 95,
    label: "Four",
  },
  {
    value: 85,
    label: "Five",
  },
];

data.sort((a, b) => {
  if (a.value > b.value) return -1;
  if (a.value < b.value) return 1;
  return 0;
});

const CUT_OFF = 20;
const Labels = ({ x, y, bandwidth, data }: Props) =>
  data.map(({ value }: any, index: number) => (
    <Text
      key={index}
      x={x(index) + bandwidth / 2}
      y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
      fontSize={14}
      fill={value >= CUT_OFF ? "white" : "black"}
      alignmentBaseline={"middle"}
      textAnchor={"middle"}
    >
      {value}
    </Text>
  ));

const Panel = () => {
  return (
    <View style={{ height: 200, padding: 20 }}>
      <View
        style={{
          height: 200,
          flexDirection: "row",
          marginHorizontal: 8,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%",
        }}
      >
        <YAxis
          data={data}
          scale={scale.scaleBand}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            fill: "grey",
            fontSize: 10,
          }}
          spacingInner={0.2}
          yAccessor={({ index, item }) => item.value}
          formatLabel={(value, index) => {
            if (index < 5) return `${data[index].value} PX`;
            else return `${value}`;
          }}
        />
        <BarChart
          style={{ flex: 1, marginHorizontal: 16 }}
          data={data}
          numberOfTicks={data.length}
          yAccessor={({ item }) => item.value}
          spacingInner={0.3}
          svg={{ fill }}
          gridProps={{
            ticks: data.map((value) => value.value),
            belowChart: true,
            svg: { stroke: "#000" },
            direction: Grid.Direction.VERTICAL,
          }}
          gridMin={0}
        >
          <Grid />
          <Labels />
        </BarChart>
      </View>
      <XAxis
        style={{ marginHorizontal: -10, marginTop: 5 }}
        data={data}
        formatLabel={(value, index) => `${index + 1}º Mês`}
        contentInset={{ left: 80, right: 55 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
  );
};

export default Panel;
