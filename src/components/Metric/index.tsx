import React from 'react';
import {
  Container,
  Title,
  Value
 } from './styles';

export interface MetricProps {
  name: string;
  value: number;
}

interface Props {
  data: MetricProps;
}

export function Metric({ data } : Props){
  return(
    <Container>
        <Title>{data.title}</Title>
        <Value>{data.measure}</Value>
    </Container>
  )
}
