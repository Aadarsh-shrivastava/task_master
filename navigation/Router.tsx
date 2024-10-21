import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';
import {useTheme} from '../contexts/themeContext';

const Router = () => {
  const {theme} = useTheme();
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          background: theme.colors.background,
          primary: theme.colors.primary,
          card: '',
          text: theme.colors.foreground,
          border: '',
          notification: '',
        },
      }}>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default Router;
