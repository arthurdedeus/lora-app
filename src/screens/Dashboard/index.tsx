import React from "react";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from "react-native";
import { measure } from "react-native-reanimated";
import {
  MeasurementCard,
  MeasurementCardProps,
} from "../../components/MeasurementCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Picture,
  User,
  UserGreeting,
  UserName,
  Icon,
  Measurements,
  Title,
  MeasurementList,
} from "./styles";
import { useLogs } from "../../hooks";
import { useDashboardData } from "../../hooks/useDashboardData";

export interface DataListProps extends MeasurementCardProps {
  id: string;
}

type RootStackParamList = {
  Dashboard: undefined;
  Details: { type: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export function Dashboard({ navigation }: Props) {
  const { logs } = useLogs() // TODO: Use to generate graph
  const data = useDashboardData()

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Picture
              source={{
                uri: "https://avatars.githubusercontent.com/u/54866778?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Dono da Estufa</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <Measurements>
        <Title>Grandezas Monitoradas</Title>
        <MeasurementList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={
            ({ item }) => <MeasurementCard
              data={item}
              onPress={() => navigation.navigate('Details', {
                type: item.type
              })}
            />
          }
        />
      </Measurements>
    </Container>
  );
}
