import React from 'react'
import { MeasurementCardProps } from '../../components/MeasurementCard'
import { Metric, MetricProps } from '../../components/Metric'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Container, Header, Icon, Title, ContentWrapper, Graph, MetricsList } from './styles'
import { View } from 'react-native'
import { useMetrics } from '../../hooks'

type RootStackParamList = {
  Dashboard: undefined
  Details: { type: string }
}

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>

export interface DataProps extends MeasurementCardProps {
  id: string
  metrics: MetricProps[]
}

interface MeasurementDataProps {
  temperature: DataProps
  humidity: DataProps
  pressure: DataProps
}

const  titleMap = {
  temperature: 'Temperatura',
  humidity: 'Umidade',
  pressure: 'Pressão'
}


export function MeasurementDetails({ route, navigation }: Props) {
  const { type } = route.params
  const metrics = useMetrics()
  const measurementData: MeasurementDataProps = {
    temperature: {
      id: '1',
      type: 'temperature',
      title: 'Temperatura',
      measure: '32°C',
      date: '06/02/2022',
      time: '12:51',
      icon: 'thermometer',
      metrics: [
        {
          name: 'Média',
          value: '32ºC',
        },
        {
          name: 'Mediana',
          value: '30ºC',
        },
        {
          name: 'Média móvel 24h',
          value: '28ºC',
        },
        {
          name: 'Média móvel 7d',
          value: '27ºC',
        },
      ],
    },
    humidity: {
      id: '2',
      type: 'humidity',
      title: 'Umidade',
      measure: '90%',
      date: '06/02/2022',
      time: '12:51',
      icon: 'droplet',
      metrics: [
        {
          name: 'Média',
          value: '90%',
        },
        {
          name: 'Mediana',
          value: '90%',
        },
        {
          name: 'Média móvel 24h',
          value: '90%',
        },
        {
          name: 'Média móvel 7d',
          value: '90%',
        },
      ],
    },
    pressure: {
      id: '3',
      type: 'pressure',
      title: 'Pressão',
      measure: '1013.25hPa',
      date: '06/02/2022',
      time: '12:51',
      icon: 'arrow-down',
      metrics: [
        {
          name: 'Média',
          value: '1010hPa',
        },
        {
          name: 'Mediana',
          value: '1010hPa',
        },
        {
          name: 'Média móvel 24h',
          value: '1010hPa',
        },
        {
          name: 'Média móvel 7d',
          value: '1010hPa',
        },
      ],
    },
  }
  const data = metrics[type]

  return (
    <Container>
      <Header>
        <View style={{position: "absolute", left: 0, right: 0, alignItems: "center"}}>
          <Title>{titleMap[type]}</Title>
        </View>
        <Icon name="chevron-left" onPress={() => navigation.navigate('Dashboard')} />
      </Header>

      <ContentWrapper>
        <Graph source={require('../../assets/images/graph-large.png')} />
        <MetricsList
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Metric data={item} type={type} />}
        />
      </ContentWrapper>
    </Container>
  )
}
