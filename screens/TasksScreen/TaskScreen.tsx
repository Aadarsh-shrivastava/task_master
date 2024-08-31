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
import AddTaskModal from '../../components/AddTaskModal';
import AddTaskForm from './components/AddTaskForm';
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
    <View style={styles(theme).container}>
      <TaskList />
      <View style={styles(theme).addTaskButon}>
        <Icon
          name="add"
          size={theme.size.xl}
          onPress={() => handleOpenModal()}
        />
      </View>
      <ModalComponentWrapper />
    </View>
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
      padding: theme.spacing.s / 2,
      backgroundColor: theme.colors.primary,
      alignSelf: 'flex-end',
      alignItems: 'center',
      borderRadius: 100,
    },
  });
