import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  horizontal: false,
})`
  margin: 0 30px;
  padding-top: 10px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
  align-self: center;
`;

export const BankData = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const BankDataText = styled.Text`
  font-weight: ${params => (params.bold ? 'bold' : '300')};
  font-size: 15px;
  color: #fff;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavTextContent = styled.View`
  justify-content: center;
  margin-left: 12px;
  flex: 1;
`;

export const NavText = styled.Text`
  color: #fff;
  font-size: ${params => (params.subtitle ? '12px' : '17px')};
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 18px;
  margin-top: 25px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;
