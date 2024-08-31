import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../../contexts/themeContext';

const RoutineScreen = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <Text>RoutineScreen</Text>
    </View>
  );
};

export default RoutineScreen;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      height: '100%',
      justifyContent: 'space-between',
    },
    addTaskButon: {
      margin: 20,
      padding: theme.spacing.s / 2,
      backgroundColor: theme.colors.primary,
      alignSelf: 'flex-end',
      alignItems: 'center',
      borderRadius: 100,
    },
  });
