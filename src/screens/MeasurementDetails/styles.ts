import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View``

export const Header = styled.View`
  width: 100%;
  height: ${(RFValue(150))}px;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  margin-top: ${getStatusBarHeight()}px;
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`

export const ContentWrapper = styled.View``

export const Graph = styled.Image``

export const MetricsList = styled.FlatList``
