import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../contexts/themeContext';
interface StatusBarProps {
  percent: number;
  color: string;
  size: number;
}
const StatusBar = ({percent, color, size}: StatusBarProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).barAndPercent}>
        <View style={styles(theme, percent).barCircle}>
          <View style={styles(theme).bar}></View>
          {/* <View style={styles(theme).leadingDisc}></View> */}
        </View>
        {/* <View style={styles(theme).percent}>
          <Text style={{fontSize: theme.size.s}}>{parseInt(percent)} %</Text>
        </View> */}
      </View>
    </View>
  );
};

export default StatusBar;

const styles = (theme: Theme, percent: number = 0) =>
  StyleSheet.create({
    container: {marginVertical: 15},
    barCircle: {justifyContent: 'flex-end', width: `${percent - 8}%`},
    bar: {height: 3, backgroundColor: theme.colors.primary},
    leadingDisc: {
      height: 15,
      width: 15,
      borderRadius: 50,
      backgroundColor: theme.colors.primary,
      alignSelf: 'flex-end',
      position: 'absolute',
      top: -7,
    },
    percent: {width: 100, height: 100, fontSize: theme.size.s},
    barAndPercent: {flexDirection: 'row', justifyContent: 'flex-start'},
  });
