import React from "react";
import { LineChart } from "react-native-chart-kit";

interface GraphProps {
  bgColor?: string;
  height: number;
  width: number;
  values: number[];
}

export function Graph ({ height, values, width, bgColor } : GraphProps) {
  const backgroundColor = bgColor || '#fff';
  const data2 = {
    labels: [],
    datasets: [
      {
        data: values,
        color: (opacity = 1) => `rgba(18, 164, 84, ${opacity})`,
      },
    ],
  };
  const chartConfig = {
    backgroundColor: backgroundColor,
    backgroundGradientFrom: backgroundColor,
    backgroundGradientTo: backgroundColor,
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(18, 164, 84, ${opacity})`,
    style: {
      borderRadius: 0,
    },
  };
  const graphStyle = {
    marginVertical: 0,
    ...chartConfig.style,
  };
  return(
    <LineChart
    data={data2}
    width={width}
    height={height}
    chartConfig={chartConfig}
    style={graphStyle}
    withInnerLines={false}
    withOuterLines={false}
    withDots={false}
  />
  )
}
