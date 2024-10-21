import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {subTask, task} from '../../types';
import {Theme, useTheme} from '../../contexts/themeContext';
import SubTask from './components/SubTask';
import {useSelector} from 'react-redux';
import {AppStackParamList} from '../../navigation/AppStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import FABGroup from '../../components/FABGroup';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useModal} from '../../hooks/useModal';
import AddTaskForm from './components/AddTaskForm';
type SubTaskScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TaskViewScreen'
>;
const SubTaskScreen = ({route, navigation}: SubTaskScreenProps) => {
  const {theme, toggleTheme} = useTheme();
  const tasks = useSelector((state: any) => state.tasks);
  const {taskId} = route.params;
  const task: task | undefined = tasks.find((task: task) => task._id == taskId);
  const subtasks = task ? task.subTasks : [];
  const {openModal, closeModal, ModalComponentWrapper} = useModal();

  const handleOpenModal = () => {
    console.log('opening modal');
    openModal(<AddTaskForm onSubmit={closeModal} oncancel={closeModal} />);
  };

  const fabOptions = [
    {
      icon: ({}) => <MaterialIcons name="task" color={'#0CA996'} size={24} />,
      label: 'Sub Task',
      onPress: () => handleOpenModal(),
    },

    {
      icon: ({}) => (
        <MaterialIcons name="task-alt" color={'#0CA996'} size={24} />
      ),
      label: 'Step',
      onPress: () => handleOpenModal(),
    },
  ];
  return (
    <View style={styles(theme).container}>
      <FlatList
        data={subtasks}
        renderItem={({item}: ListRenderItemInfo<subTask>) => (
          <View>
            <SubTask subTask={item} />
          </View>
        )}
      />
      <Text>{task?.deadline?.toLocaleString() + 'erere'}</Text>
      <Text>{task?.startTime?.toLocaleString() + 'asdsadsa'}</Text>
      <ModalComponentWrapper />
      <FABGroup FABs={fabOptions} />
    </View>
  );
};

export default SubTaskScreen;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      height: '100%',
    },
  });
