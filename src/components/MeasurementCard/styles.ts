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

export const Measure = styled.Text<MeasureProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 19px;
  align-items: center;
`

export const Icon = styled(Feather)<MeasureProps>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 5px;
`

export const Timestamp = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const ContentWrapper = styled.View``

export const GraphWrapper = styled.View``

export const Graph = styled.Image`
  margin-left: 8px;
`
