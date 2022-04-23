import React from "react";
import { MeasurementCardProps } from "../../components/MeasurementCard";
import { Metric, MetricProps } from "../../components/Metric";
import {
  Container,
  Header,
  Title,
  ContentWrapper,
  Graph,
  MetricsList,
} from "./styles";

export interface DataProps extends MeasurementCardProps {
  id: string;
  metrics: MetricProps[];
}

export function MeasurementDetails() {
  const data: DataProps = {
    id: "1",
    type: "temperature",
    title: "Temperatura",
    measure: "32°C",
    date: "06/02/2022",
    time: "12:51",
    icon: "thermometer",
    metrics: [
      {
        name: "Média",
        value: "32ºC",
      },
      {
        name: "Mediana",
        value: "30ºC",
      },
      {
        name: "Média móvel 24h",
        value: "28ºC",
      },
      {
        name: "Média móvel 7d",
        value: "27ºC",
      },
    ],
  };

  return (
    <Container>
      <Header>
        <Title>{data.title}</Title>
      </Header>

      <ContentWrapper>
        <Graph source={require("../../assets/images/graph-large.png")} />
        <MetricsList
          data={data.metrics}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Metric data={item} />}
        />
      </ContentWrapper>
    </Container>
  );
}
