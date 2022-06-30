import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import {
  Container,
  Title,
  Measure,
  Footer,
  Icon,
  Timestamp,
  ContentWrapper,
  GraphWrapper,
  Graph,
} from './styles';

export interface MeasurementCardProps {
  type: string;
  title: string;
  measure: string;
  date: string;
  time: string;
  icon: string;
}

interface Props {
  data: MeasurementCardProps;
  onPress: () => void;
}

export function MeasurementCard({ data, onPress }: Props) {
  const width = 185;
  const height = 100;
  const data2 = {
    labels: [],
    datasets: [
      {
        data: [50, 20, 2, 86, 71, 100],
        color: (opacity = 1) => `rgba(18, 164, 84, ${opacity})`,
      },
    ],
  };
  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
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
  return (
    <Container onPress={onPress}>
      <ContentWrapper>
        <Title>{data.title}</Title>
        <Measure type={data.type}>{data.measure}</Measure>

        <Footer>
          <Icon name={data.icon} />
          <Timestamp>
            {data.date} às {data.time}
          </Timestamp>
        </Footer>
      </ContentWrapper>
      {/* <GraphWrapper> */}
        <LineChart
          data={data2}
          width={width}
          height={height}
          chartConfig={chartConfig}
          style={graphStyle}
          // withHorizontalLabels={false}
          withInnerLines={false}
          withOuterLines={false}
        />
        {/* <Graph source={require("../../assets/images/graph-small.png")} /> */}
      {/* </GraphWrapper> */}
    </Container>
  );
}
