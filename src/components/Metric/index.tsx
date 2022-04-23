import React from "react";
import { formatTemperature } from "../../util/format";
import { Container, Title, Value } from "./styles";

export interface MetricProps {
  name: string;
  value: string;
}

interface Props {
  data: MetricProps;
}

export function Metric({ data }: Props) {
  return (
    <Container>
      <Title>{data.name}</Title>
      <Value>{data.value}</Value>
    </Container>
  );
}
