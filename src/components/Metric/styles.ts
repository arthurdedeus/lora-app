import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface MeasureProps {
  type: string;
}


export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;

  margin: 16px 0px;
  padding: 18px 24px;
  border-radius: 5px;
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`

export const Value = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`
