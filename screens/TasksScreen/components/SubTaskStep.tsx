import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../../../contexts/themeContext';
import {Badge} from 'react-native-paper';

interface SubTaskStepProps {
  name: string;
  // date:string,
}
const SubTaskStep = () => {
  const {theme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).card}>
        <Text style={styles(theme).text}>{'subtask1'}</Text>
      </View>
      <View style={styles(theme).DateAndBadge}>
        <Text>Date</Text>
        <View style={styles(theme).badge}>
          <Text>2</Text>
        </View>
      </View>
    </View>
  );
};

export default SubTaskStep;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      //   margin: 10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    card: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.s,
      borderRadius: theme.size.s,
      width: theme.size.xl * 7,
    },
    text: {},
    date: {},
    badge: {
      backgroundColor: theme.colors.primary,
      width: 20,
      height: 20,
      borderRadius: 50,
      alignItems: 'center',
      margin: theme.spacing.m,
    },
    badgeText: {},
    dateText: {},
    DateAndBadge: {flexDirection: 'row', alignItems: 'center'},
  });
