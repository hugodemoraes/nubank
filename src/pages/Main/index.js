import React, { useState } from 'react';
import { Animated, Dimensions, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  CardWrapper,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

const { height: windowHeight } = Dimensions.get('window');
const MAX_ANIMATION_HEIGHT = windowHeight - 310;

export default function Main() {
  const [showBalance, setShowBalance] = useState(true);

  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const handleAnimation = (opened) => {
    Animated.timing(translateY, {
      toValue: opened ? MAX_ANIMATION_HEIGHT : 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      offset = opened ? MAX_ANIMATION_HEIGHT : 0;
      translateY.setOffset(offset);
      translateY.setValue(0);
    });
  };

  const onHandlerStateChange = (event) => {
    const { nativeEvent } = event;

    if (nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = nativeEvent;

      offset += translationY;

      if (translationY >= 50) {
        opened = true;
      } else {
        translateY.setOffset(0);
        translateY.setValue(offset);
        offset = 0;
      }

      handleAnimation(opened);
    }
  };

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <CardWrapper
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, MAX_ANIMATION_HEIGHT],
                    outputRange: [0, MAX_ANIMATION_HEIGHT],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <Card>
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <TouchableOpacity
                  onPress={() => {
                    setShowBalance(!showBalance);
                  }}
                >
                  <Icon
                    name={showBalance ? 'visibility' : 'visibility-off'}
                    size={28}
                    color="#666"
                  />
                </TouchableOpacity>
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description blocked={!showBalance}>R$ 8.903,12</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 2.500,00 recebida de Júlia Vacilotto hoje às 18:15.
                </Annotation>
              </CardFooter>
            </Card>
          </CardWrapper>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
