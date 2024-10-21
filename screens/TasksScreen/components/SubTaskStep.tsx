import {StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../../../contexts/themeContext';
import {Badge} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {subTask} from '../../../types';

interface SubTaskStepProps {
  subTask: subTask;
}
const SubTaskStep = ({subTask}: SubTaskStepProps) => {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  return (
    <View style={styles(theme).container}>
      <TouchableOpacity
        onPress={() =>
          dispatch({
            type: 'REMOVE_SUB_TASK',
            payload: {taskId: 'task1', subTaskId: subTask._id},
          })
        }>
        <View style={styles(theme).card}>
          <Text style={styles(theme).text}>{'subtask1'}</Text>
        </View>
      </TouchableOpacity>
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
      // backgroundColor: theme.colors.primary,
      padding: theme.spacing.s,
      borderRadius: theme.size.s,
      width: theme.size.xl * 7,
      borderWidth: 1,
      borderColor: theme.colors.primary,
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
