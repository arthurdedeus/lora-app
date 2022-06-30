import React from "react";
import { formatMetric } from "../../utils/format";
import { Container, Title, Value } from "./styles";

export interface MetricProps {
  name: string;
  value: number;
}

interface Props {
  data: MetricProps;
  type: string;
}

export function Metric({ data, type }: Props) {
  return (
    <Container>
      <Title>{data.name}</Title>
      <Value>{formatMetric(type, data.value)}</Value>
    </Container>
  );
}
