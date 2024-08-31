import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../../contexts/themeContext';
import DatePicker from '../../components/DatePicker';

const ScheduleScreen = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).calendar}>
        <DatePicker />
      </View>
    </View>
  );
};

export default ScheduleScreen;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      height: '100%',
      justifyContent: 'flex-end',
    },
    calendar: {height: '100%', width: '100%'},
    addTaskButon: {
      margin: 20,
      padding: theme.spacing.s / 2,
      backgroundColor: theme.colors.primary,
      alignSelf: 'flex-end',
      alignItems: 'center',
      borderRadius: 100,
    },
  });
