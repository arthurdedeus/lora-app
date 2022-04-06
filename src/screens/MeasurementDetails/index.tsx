import React from 'react';
import { MeasurementCardProps } from '../../components/MeasurementCard';
import { Metric, MetricProps } from '../../components/Metric';
import {
  Container,
  Header,
  Title,
  ContentWrapper,
  Graph,
  MetricsList
 } from './styles';


export interface DataProps extends MeasurementCardProps {
  id: string;
  metrics: MetricProps[]
}

export function MeasurementDetails(){
  const data : DataProps = {
    id: '1',
    type: "temperature",
    title: 'Temperatura',
    measure: '32°C',
    date: "06/02/2022",
    time: "12:51",
    icon: "thermometer",
    metrics: [
      {
        name: "Média",
        value: 32
      },
      {
        name: "Mediana",
        value: 30
      },
      {
        name: "Média móvel 24h",
        value: 28
      },
      {
        name: "Média móvel 7d",
        value: 27
      }
    ]
  }

  return(
    <Container>
      <Header>
        <Title>
          Temperatura
        </Title>
      </Header>
      <ContentWrapper>
        <Graph source={require('../../assets/images/graph-large.png')}/>
        <MetricsList>
          <Metric />
          <Metric />
        </MetricsList>
      </ContentWrapper>


    </Container>
  )
}
