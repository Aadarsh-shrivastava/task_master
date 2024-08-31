import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../contexts/themeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
const CustomHeader = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).title}>
        <Text style={styles(theme).titleText}>taskMaster</Text>
      </View>
      <View style={styles(theme).rightIcons}>
        <Icon
          name="search"
          size={theme.size.l}
          color={theme.colors.foreground}
        />
        <Icon name="menu" size={theme.size.l} color={theme.colors.foreground} />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: theme.colors.background,
      //   height: theme.spacing.xxl * 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {},
    titleText: {
      fontSize: theme.size.l,
      padding: theme.spacing.sm,
      color: theme.colors.foreground,
    },
    rightIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: theme.size.s,
    },
    leftIcons: {},
  });
