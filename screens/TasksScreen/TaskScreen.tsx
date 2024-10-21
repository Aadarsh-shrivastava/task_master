import {
  Button,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {task} from '../../types';
import {tasks} from '../../data/tasks';
import TaskList from './components/TaskList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Theme, useTheme} from '../../contexts/themeContext';
import {useDispatch} from 'react-redux';
import {useModal} from '../../hooks/useModal';
import AddTaskForm from './components/AddTaskForm';
import {FAB, PaperProvider} from 'react-native-paper';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import DateAndTimePicker from './components/DateAndTimePicker';
const TaskScreen = () => {
  const {theme, toggleTheme} = useTheme();
  const dispatch = useDispatch();
  const {openModal, closeModal, ModalComponentWrapper} = useModal();

  const AddTask = (task: task) => {
    console.log(task);
    dispatch({type: 'ADD_TASK', payload: task});
  };

  const RemoveTask = () => {};

  const handleOpenModal = () => {
    console.log('opening modal');
    openModal(<AddTaskForm onSubmit={closeModal} oncancel={closeModal} />);
  };

  return (
    <PaperProvider>
      <View style={styles(theme).container}>
        <TaskList />
        <View style={styles(theme).addTaskButon}>
          <FAB
            icon={({}) => <MaterialIcon name="add" size={24} />}
            style={styles(theme).fab}
            onPress={() => handleOpenModal()}
          />
        </View>
        <ModalComponentWrapper />
      </View>
    </PaperProvider>
  );
};

export default TaskScreen;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      height: '100%',
      justifyContent: 'space-between',
    },
    addTaskButon: {
      margin: 20,
      alignSelf: 'flex-end',
      alignItems: 'center',
      borderRadius: 100,
    },
    fab: {
      borderColor: theme.colors.primary,
      borderWidth: 1,
      backgroundColor: theme.colors.background,
    },
  });
