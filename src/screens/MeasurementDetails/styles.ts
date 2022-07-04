import {
  Dimensions,
  FlatList,
  FlatListProps,
  useWindowDimensions,
} from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { MetricProps } from '../../components/Metric';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(150)}px;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: ${getStatusBarHeight()}px;
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Feather)`
  margin-top: ${getStatusBarHeight()}px;
  margin-right: ${RFValue(85)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(24)}px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 50px;
`;

export const Graph = styled.Image`
  margin-top: 10px;
`;

export const MetricsList = styled(
  FlatList as new (props: FlatListProps<MetricProps>) => FlatList<MetricProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})`
  width: 100%;
  padding-horizontal: 24px;
  margin-top: 10px;
`;
