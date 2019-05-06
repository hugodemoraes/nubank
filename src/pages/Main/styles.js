import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #8a05be;
`;

export const Content = styled.View`
  flex: 1;
  z-index: 5;
`;

export const CardWrapper = styled(Animated.View)`
  height: 100%;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  max-height: 400px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const VisibilityButton = styled.TouchableOpacity`
  padding: 3px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: ${params => (params.blocked ? '#EEE' : '#333')};
  background: ${params => (params.blocked ? '#EEE' : 'transparent')};
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  align-items: center;
  flex-direction: row;
`;

export const Annotation = styled.Text`
  font-size: 13px;
  color: #333;
  margin-left: 10px;
`;
