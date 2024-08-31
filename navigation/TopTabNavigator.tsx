import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RoutineScreen from '../screens/RoutineScreen/RoutineScreen';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TaskScreen from '../screens/TasksScreen/TaskScreen';
import {red100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import {useTheme} from '../contexts/themeContext';
import {tasks} from '../data/tasks';
import TaskStackNavigator from './TaskNavigators/TaskStackNavigator';

const Tab = createMaterialTopTabNavigator();
function HomeTabNavigator() {
  const {theme, toggleTheme} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          // color: theme.colors.foreground,
        },
      }}>
      <Tab.Screen
        name="TasksScreen"
        options={{title: 'tasks'}}
        component={TaskStackNavigator}
      />
      <Tab.Screen
        name="RoutinesScreen"
        options={{title: 'Routines'}}
        component={RoutineScreen}
      />
      <Tab.Screen
        name="ScheduleScreen"
        options={{title: 'Schedule'}}
        component={ScheduleScreen}
      />
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;
