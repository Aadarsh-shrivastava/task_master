import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import SubTaskScreen from '../screens/TasksScreen/TaskViewScreen';

export type AppStackParamList = {
  HomeNavigator: undefined;
  TaskViewScreen: undefined;
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
        options={{headerShown: false}}
        name="TaskViewScreen"
        component={SubTaskScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
