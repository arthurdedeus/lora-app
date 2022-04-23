import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface MeasureProps {
  type: string;
}


export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  justify-content: space-between;

  margin: 8px 0px;
  padding: 12px 24px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const Value = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
`;
