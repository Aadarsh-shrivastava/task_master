import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {subTask, subTaskType} from '../../../types';
import SubTaskStep from './SubTaskStep';
import SubTaskCheck from './SubTaskCheck';

interface SubTaskProps {
  subTask: subTask;
}
const SubTask = ({subTask}: SubTaskProps) => {
  return (
    <View>
      {subTask.type == subTaskType.Step ? (
        <View>
          <SubTaskStep />
        </View>
      ) : (
        <View>
          <SubTaskCheck />
        </View>
      )}
    </View>
  );
};

export default SubTask;

const styles = StyleSheet.create({});
