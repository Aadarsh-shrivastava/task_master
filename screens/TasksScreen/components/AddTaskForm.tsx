import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {task} from '../../../types';
import {Theme, useTheme} from '../../../contexts/themeContext';
import {useDispatch} from 'react-redux';

interface AddTaskFormProps {
  onSubmit: () => void;
  oncancel: () => void;
}
const AddTaskForm = ({onSubmit, oncancel}: AddTaskFormProps) => {
  const {theme} = useTheme();
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const newTask: task = {
      _id: `${name}${Math.random()}`,
      name: name,
      creation_time: new Date(),
      deadline: new Date(),
      subTasks: [],
    };
    dispatch({type: 'ADD_TASK', payload: newTask});
    onSubmit();
  };

  const hadnleCancel = () => {
    oncancel();
  };
  return (
    <View style={{padding: 20}}>
      <View>
        <Text>Task Name</Text>
        <TextInput
          style={{
            borderBottomColor: theme.colors.primary,
            borderBottomWidth: 2,
            marginBottom: 10,
          }}
          value={name}
          onChangeText={text => {
            setName(text);
          }}
        />
      </View>

      <View style={styles(theme).buttons}>
        <Text style={styles(theme).buttonText} onPress={() => hadnleCancel()}>
          Cancel
        </Text>
        <Text style={styles(theme).buttonText} onPress={() => handleSubmit()}>
          Add Task
        </Text>
      </View>
    </View>
  );
};

export default AddTaskForm;

const styles = (theme: Theme) =>
  StyleSheet.create({
    buttons: {
      flexDirection: 'row',
      margin: theme.spacing.s,
    },
    buttonText: {
      color: theme.colors.primary,
      fontWeight: 'bold',
      padding: theme.spacing.s,
    },
  });
