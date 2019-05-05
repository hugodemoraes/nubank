import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  margin-left: 10px;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  padding: 10px;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;
