import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Theme, useTheme} from '../../../contexts/themeContext';
import CheckBox from 'react-native-check-box';
import {subTask} from '../../../types';
import {useDispatch} from 'react-redux';

interface SubTaskCheckProps {
  subTask: subTask;
}
const SubTaskCheck = ({subTask}: SubTaskCheckProps) => {
  const {theme} = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).textCheckboxAndDate}>
        <TouchableOpacity
          onPress={() =>
            dispatch({
              type: 'REMOVE_SUB_TASK',
              payload: {taskId: 'task1', subTaskId: subTask._id},
            })
          }>
          <View style={styles(theme).textAndCheckbox}>
            <Text style={styles(theme).text}>{'subtask1'}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles(theme).dateAndCheckbox}>
          <Text style={{paddingHorizontal: 10}}>Date</Text>
          <CheckBox
            isChecked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            checkedCheckBoxColor={theme.colors.primary}
          />
        </View>
      </View>
      <View style={styles(theme, isChecked).bar}></View>
    </View>
  );
};

export default SubTaskCheck;

const styles = (theme: Theme, isChecked: boolean = false) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {},
    bar: {
      backgroundColor: isChecked ? theme.colors.primary : theme.colors.inactive,
      width: 4,
      height: 32,
      alignItems: 'center',
      marginHorizontal: theme.spacing.m,
    },

    DateAndBadge: {flexDirection: 'row', alignItems: 'center'},
    textAndCheckbox: {flexDirection: 'row'},
    textCheckboxAndDate: {
      width: '50%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dateAndCheckbox: {flexDirection: 'row', alignItems: 'center'},
  });
