import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../contexts/themeContext';

const AddTaskModal = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View>
      <Text>AddTaskModal</Text>
    </View>
  );
};

export default AddTaskModal;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      height: '100%',
      justifyContent: 'space-between',
    },
  });
