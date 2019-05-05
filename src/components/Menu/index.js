import React from 'react';
import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
} from './styles';

const navItems = [
  {
    icon: 'help-outline',
    text: 'Me ajuda',
  },
  {
    icon: 'person-outline',
    text: 'Perfil',
  },
  {
    icon: 'credit-card',
    text: 'Configurar cartão',
  },
  {
    icon: 'smartphone',
    text: 'Configurações do app',
  },
];

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode
          value="https://github.com/hugodemoraes"
          size={100}
          fgColor="#FFF"
          bgColor="#8A05BE"
        />
      </Code>

      <Nav>
        {navItems.map(item => (
          <NavItem key={item.icon}>
            <Icon name={item.icon} size={20} color="#FFF" />
            <NavText>{item.text}</NavText>
          </NavItem>
        ))}
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
