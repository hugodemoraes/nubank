import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

const tabs = [
  {
    icon: 'receipt',
    text: 'Pagar',
  },
  {
    icon: 'arrow-upward',
    text: 'Transferir',
  },
  {
    icon: 'credit-card',
    text: 'Cartão virtual',
  },
  {
    icon: 'chat-bubble-outline',
    text: 'Cobrar',
  },
  {
    icon: 'arrow-downward',
    text: 'Depositar',
  },
  {
    icon: 'no-encryption',
    text: 'Bloquear cartão',
  },
  {
    icon: 'timeline',
    text: 'Ajustar limite',
  },
  {
    icon: 'person-add',
    text: 'Indicar amigos',
  },
];

export default function Tabs({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 300],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }}
    >
      <TabsContainer>
        {tabs.map(tab => (
          <TabItem key={tab.icon} onPress={() => {}}>
            <Icon name={tab.icon} size={24} color="#FFF" />
            <TabText>{tab.text}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  );
}
