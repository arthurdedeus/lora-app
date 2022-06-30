import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Graph } from '../Graph';

import {
  Container,
  Title,
  Measure,
  Footer,
  Icon,
  Timestamp,
  ContentWrapper,
  GraphWrapper,
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
  values: number[];
  onPress: () => void;
}

export function MeasurementCard({ data, onPress }: Props) {
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
      <GraphWrapper>
        <Graph values={[30, 90, 67, 54, 10, 2]} width={185} height={100} />
      </GraphWrapper>
    </Container>
  );
}
