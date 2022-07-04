import React from 'react';

import {
  Container,
  Header,
  Icon,
  Title,
  ContentWrapper,
  MetricsList,
} from './styles';
import { getLogs } from '../../utils';
import { Graph } from '../../components/Graph';
import { MeasurementCardProps } from '../../components/MeasurementCard';
import { Metric, MetricProps } from '../../components/Metric';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLogs, useMetrics } from '../../hooks';
import { View } from 'react-native';

type RootStackParamList = {
  Dashboard: undefined;
  Details: { type: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export interface DataProps extends MeasurementCardProps {
  id: string;
  metrics: MetricProps[];
}

interface MeasurementDataProps {
  temperature: DataProps;
  humidity: DataProps;
  pressure: DataProps;
}

const titleMap = {
  temperature: 'Temperatura',
  humidity: 'Umidade',
  pressure: 'Pressão',
};

export function MeasurementDetails({ route, navigation }: Props) {
  const logs = useLogs();
  const metrics = useMetrics();
  const { type } = route.params;
  const data = metrics[type];

  return (
    <Container>
      <Header>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            alignItems: 'center',
          }}
        >
          <Title>{titleMap[type]}</Title>
        </View>
        <Icon
          name="chevron-left"
          onPress={() => navigation.navigate('Dashboard')}
        />
      </Header>

      <ContentWrapper>
        <Graph
          values={getLogs(logs, type)}
          width={350}
          height={200}
          bgColor={'#f0f2f5'}
        />
        <MetricsList
          data={data}
          keyExtractor={item => item.name}
          renderItem={({ item }) => <Metric data={item} type={type} />}
        />
      </ContentWrapper>
    </Container>
  );
}
