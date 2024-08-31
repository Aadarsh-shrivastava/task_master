import {createStackNavigator} from '@react-navigation/stack';
import TaskScreen from '../../screens/TasksScreen/TaskScreen';
import SubTaskScreen from '../../screens/TasksScreen/TaskViewScreen';

export type TaskStackParamList = {
  TaskScreen: undefined;
  SubTaskScreen: undefined;
};

const TaskStack = createStackNavigator<TaskStackParamList>();

const TaskStackNavigator = () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        options={{headerShown: false}}
        name="TaskScreen"
        component={TaskScreen}
      />
      <TaskStack.Screen name="SubTaskScreen" component={SubTaskScreen} />
    </TaskStack.Navigator>
  );
};

export default TaskStackNavigator;
