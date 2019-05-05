import React from 'react';
import { bool } from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

import {
  Container, Top, Logo, Title,
} from './styles';

export default function Header({ isOpened }) {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Hugo</Title>
      </Top>
      <Icon name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={20} color="#FFF" />
    </Container>
  );
}

Header.propTypes = {
  isOpened: bool,
};

Header.defaultProps = {
  isOpened: false,
};
