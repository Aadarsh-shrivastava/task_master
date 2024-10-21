import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../contexts/themeContext';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const TaskViewHeader = () => {
  const {theme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).leftIcons}>
        <MaterialIcon style={styles(theme).icon} name="arrow-back" size={24} />
        <MaterialIcon
          style={[
            styles(theme).icon,
            {
              borderColor: theme.colors.primary,
              borderWidth: 1,
              borderRadius: 8,
              padding: 2,
            },
          ]}
          name="check"
          color={theme.colors.primary}
          size={24}
        />
        <Text style={styles(theme).title}>title</Text>
      </View>
      <MaterialIcon
        style={styles(theme).rightIcon}
        name="more-vert"
        size={24}
      />
    </View>
  );
};

export default TaskViewHeader;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: theme.spacing.m,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {fontSize: theme.size.ml, margin: theme.spacing.s},
    leftIcons: {flexDirection: 'row', alignItems: 'center'},
    rightIcon: {},
    icon: {margin: theme.spacing.s / 2},
  });
