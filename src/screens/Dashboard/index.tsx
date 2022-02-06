import React from 'react';
import { Text } from 'react-native';
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
 } from './styles';


export function Dashboard(){
  return(
    <Container>

      <Header>
        <UserWrapper>

          <UserInfo>
            <Picture source={{ uri: 'https://avatars.githubusercontent.com/u/54866778?v=4'}}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Dono da Estufa</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>

    </Container>
  )
}
