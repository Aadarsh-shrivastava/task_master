import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {tasks} from '../../../data/tasks';
import {task} from '../../../types';
import TaskCard from './TaskCard';
import {Button} from 'react-native-paper';
import {Theme, useTheme} from '../../../contexts/themeContext';
import {TaskStackParamList} from '../../../navigation/TaskNavigators/TaskStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../../navigation/AppStackNavigator';
import {useDispatch, useSelector} from 'react-redux';

const TaskList = () => {
  const {theme, toggleTheme} = useTheme();
  const tasks = useSelector((state: any) => state.tasks);

  return (
    <View style={styles(theme).container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item._id}
        renderItem={({item}: ListRenderItemInfo<task>) => (
          <TaskCard task={item} />
        )}
      />
    </View>
  );
};

export default TaskList;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      // backgroundColor: theme.colors.background
    },
  });
