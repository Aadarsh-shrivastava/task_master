import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Theme, useTheme} from '../contexts/themeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomBottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {theme, toggleTheme} = useTheme();
  const icons = ['home', 'analytics', 'person'];
  return (
    <View style={styles(theme).tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={
                isFocused
                  ? styles(theme).focusedTab
                  : styles(theme).unFocusedTab
              }>
              <Icon
                style={{
                  color: isFocused
                    ? theme.colors.foreground
                    : theme.colors.inactive,
                }}
                name={icons[index]}
                size={32}
              />
            </View>
            <Text style={styles(theme).label}>{label.toString()}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabBar;

const styles = (theme: Theme) =>
  StyleSheet.create({
    tabBar: {
      flexDirection: 'row',
      backgroundColor: theme.colors.background,
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'space-between',
    },
    tab: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    focusedTab: {
      backgroundColor: theme.colors.primary,
      opacity: 0.7,
      borderRadius: 20,
      width: 60,
      alignItems: 'center',
    },
    unFocusedTab: {
      opacity: 0.7,
      borderRadius: 20,
      width: 60,
      alignItems: 'center',
    },
    label: {color: theme.colors.foreground},
  });
