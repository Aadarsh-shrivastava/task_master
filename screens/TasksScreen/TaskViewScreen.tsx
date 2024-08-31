import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {tasks} from '../../data/tasks';
import {subTask, task} from '../../types';
import {Theme, useTheme} from '../../contexts/themeContext';
import SubTask from './components/SubTask';
import {useSelector} from 'react-redux';
interface SubTaskScreenProps {
  // subtasks: subTask[];
  taskId: string;
}
const SubTaskScreen = ({taskId = 'task1'}: SubTaskScreenProps) => {
  const {theme, toggleTheme} = useTheme();
  const tasks = useSelector((state: any) => state.tasks);
  const task: task | undefined = tasks.find((task: task) => task._id == taskId);
  const subtasks = task ? task.subTasks : [];
  return (
    <View style={styles(theme).container}>
      <FlatList
        data={subtasks}
        renderItem={({item}: ListRenderItemInfo<subTask>) => (
          <View>
            {/* <Text>{item.title}</Text> */}
            <SubTask subTask={item} />
          </View>
        )}
      />
    </View>
  );
};

export default SubTaskScreen;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {backgroundColor: theme.colors.background, height: '100%'},
  });
