import React from "react";
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
} from "./styles";

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
        <Graph source={require("../../assets/images/graph-small.png")} />
      </GraphWrapper>
    </Container>
  );
}
