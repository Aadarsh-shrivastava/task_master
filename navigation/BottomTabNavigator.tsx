import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import TaskScreen from '../screens/TasksScreen/TaskScreen';
import RoutineScreen from '../screens/RoutineScreen/RoutineScreen';
import ScheduleScreen from '../screens/ScheduleScreen/ScheduleScreen';
import CustomHeader from '../components/CustomHeader';
import HomeTabNavigator from './TopTabNavigator';
import StatsScreen from '../screens/StatsScreen/StatsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import CustomBottomTabBar from '../components/CustomBottomTabBar';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Animated} from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <CustomBottomTabBar {...props} />}>
      <Tab.Screen
        options={{header: () => <CustomHeader />, title: 'Home'}}
        name="HomeScreen"
        component={HomeTabNavigator}
      />
      <Tab.Screen
        name="StatsScreen"
        options={{header: () => <CustomHeader />, title: 'Dashboard'}}
        component={StatsScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{header: () => <CustomHeader />, title: 'Settings'}}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
