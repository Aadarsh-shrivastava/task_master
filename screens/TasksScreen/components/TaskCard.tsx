import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {task, taskStatus} from '../../../types';
import {Theme, useTheme} from '../../../contexts/themeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StatusBar from '../../../components/StatusBar';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../../navigation/AppStackNavigator';

interface TaskCardProps {
  task: task;
}
const TaskCard = ({task}: TaskCardProps) => {
  const {theme, toggleTheme} = useTheme();
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const dispatch = useDispatch();
  return (
    <View style={styles(theme).container}>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: 'CHANGE_STATUS',
            payload: {taskId: task._id, status: taskStatus.done},
          });
        }}>
        <View style={styles(theme).leftIcon}>
          {task.status == taskStatus.done ? (
            <Icon
              name="check"
              size={theme.size.l}
              color={theme.colors.primary}
            />
          ) : (
            <Icon
              name="notifications-on"
              size={theme.size.l}
              color={theme.colors.inactive}
            />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onLongPress={() => {
          dispatch({type: 'REMOVE_TASK', payload: task._id});
        }}
        onPress={() => {
          navigation.push('TaskViewScreen');
        }}>
        <View style={{margin: 10, marginHorizontal: 10}}>
          <View style={styles(theme).nameTime}>
            <View style={(styles(theme).name, {flexWrap: 'wrap'})}>
              <Text
                style={{color: theme.colors.foreground, flexWrap: 'wrap'}}
                numberOfLines={2}
                ellipsizeMode="tail">
                {task.name}
              </Text>
            </View>
            {/* <Text style={styles(theme).time}>
            {new Date(task.creation_time.getTime() * 1000).toLocaleTimeString()}
          </Text> */}
          </View>
          <View style={styles(theme).statusBar}>
            <StatusBar percent={task.progress} color={''} size={0} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      // backgroundColor: theme.colors.background,
      flexDirection: 'row',
      // width: '65%',
      padding: 10,
      paddingVertical: 30,
      height: 100,
      elevation: 15,
    },
    leftIcon: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
    },
    time: {
      fontSize: theme.size.s,
      width: theme.size.m * 2,
      color: theme.colors.foreground,
    },
    nameTime: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {marginHorizontal: 20},
    statusBar: {},
  });
