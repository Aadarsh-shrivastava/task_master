import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import SubTaskScreen from '../screens/TasksScreen/TaskViewScreen';
import TaskViewHeader from '../components/TaskViewHeader';

export type AppStackParamList = {
  HomeNavigator: undefined;
  TaskViewScreen: {taskId: string};
  RoutineViewScreen: undefined;
  SettingsScreen: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{headerShown: false}}
        name="HomeNavigator"
        component={BottomTabNavigator}
      />
      <AppStack.Screen
        options={{header: () => <TaskViewHeader />}}
        name="TaskViewScreen"
        component={SubTaskScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
