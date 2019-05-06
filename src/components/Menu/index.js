import React from 'react';
import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  BankData,
  BankDataText,
  Nav,
  NavItem,
  NavTextContent,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

const navItems = [
  {
    icon: 'help-outline',
    text: 'Me ajuda',
  },
  {
    icon: 'person-outline',
    text: 'Perfil',
    subtitle: 'Nome de preferência, telefone, e-mail',
  },
  {
    icon: 'monetization-on',
    text: 'Configurar NuConta',
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

      <BankData>
        <BankDataText>
          Banco <BankDataText bold>260 - Nu Pagamentos S.A.</BankDataText>
        </BankDataText>
        <BankDataText>
          Agência <BankDataText bold>0001</BankDataText>
        </BankDataText>
        <BankDataText>
          Conta <BankDataText bold>0000000-0</BankDataText>
        </BankDataText>
      </BankData>

      <Nav>
        {navItems.map(item => (
          <NavItem key={item.icon}>
            <Icon name={item.icon} size={30} color="#FFF" />
            <NavTextContent>
              <NavText>{item.text}</NavText>
              {item.subtitle && <NavText subtitle>{item.subtitle}</NavText>}
            </NavTextContent>
            <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
          </NavItem>
        ))}
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
