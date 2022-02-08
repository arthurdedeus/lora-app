import React from 'react';
import {
  Container,
  Title,
  Measure,
  Footer,
  Icon,
  Timestamp,
 } from './styles';

export interface MeasurementCardProps {
  type: string;
  title: string;
  measure: string;
  date: string;
  time: string;
}

interface Props {
  data: MeasurementCardProps;
}

export function MeasurementCard({ data } : Props){
  return(
    <Container>

      <Title>{data.title}</Title>

      <Measure type={data.type}>
        {data.measure}
      </Measure>

      <Footer>
        <Icon name="thermometer"/>

        <Timestamp>{data.date} às {data.time}</Timestamp>
      </Footer>

    </Container>
  )
}
