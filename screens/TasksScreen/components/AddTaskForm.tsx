import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {task, taskStatus} from '../../../types';
import {Theme, useTheme} from '../../../contexts/themeContext';
import {useDispatch} from 'react-redux';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import {TouchableHighlight} from 'react-native-gesture-handler';
import DateAndTimePicker from './DateAndTimePicker';
import CheckBox from 'react-native-check-box';
import Accordion from '../../../components/Accordion';

interface AddTaskFormProps {
  onSubmit: () => void;
  oncancel: () => void;
}

const AddTaskForm = ({onSubmit, oncancel}: AddTaskFormProps) => {
  const {theme} = useTheme();

  const [name, setName] = useState('');
  const [date, setdate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [isRoutine, setIsRoutine] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>();
  const [deadline, setDeadline] = useState<Date | null>(null);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newTask: task = {
      _id: `${name}${Math.random()}`,
      name: name,
      creation_time: new Date(),
      deadline: deadline,
      subTasks: [],
      status: taskStatus.todo,
      progress: 0,
      isRoutine: false,
      startTime: startTime ?? null,
    };
    dispatch({type: 'ADD_TASK', payload: newTask});
    onSubmit();
  };

  const hadnleCancel = () => {
    oncancel();
  };

  const combineDateTime = () => {
    if (date) {
      const combined: Date | null = new Date(date);

      if (time) {
        combined.setHours(time.getHours());
        combined.setMinutes(time.getMinutes());
      } else {
        combined.setHours(23, 59);
      }

      return combined;
    }
    return null;
  };

  return (
    <View style={{padding: theme.spacing.m}}>
      <View>
        {/* <Text>Task Name</Text> */}
        <TextInput
          style={styles(theme).textInput}
          value={name}
          onChangeText={text => {
            setName(text);
          }}
          placeholder="Task Name"
        />
      </View>

      {/* select date and time of the task */}
      <Accordion style={styles(theme).Accordin} title={'Date & Time'}>
        <View>
          <DateAndTimePicker
            textStyles={styles(theme).buttonText}
            viewStyle={{}}
            submitStyle={styles(theme).buttonText}
            setDate={setdate}
            setTime={setTime}
            date={date}
            time={time}
          />
          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
            }}>
            <Text
              onPress={() => {
                setStartTime(null);
              }}
              style={styles(theme).buttonText}>
              Reset
            </Text>
            <Text
              onPress={() => setStartTime(combineDateTime())}
              style={styles(theme).buttonText}>
              Confirm
            </Text>
          </View>
          {startTime && <Text>{startTime?.toLocaleString()}</Text>}
        </View>
      </Accordion>

      {/* select deadline of the task */}
      <Accordion style={styles(theme).Accordin} title={'Deadline'}>
        <View>
          <DateAndTimePicker
            textStyles={styles(theme).buttonText}
            viewStyle={{}}
            submitStyle={styles(theme).buttonText}
            setDate={setdate}
            setTime={setTime}
            date={date}
            time={time}
          />
          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
            }}>
            <Text
              onPress={() => {
                setDeadline(null);
              }}
              style={styles(theme).buttonText}>
              Reset
            </Text>
            <Text
              onPress={() => {
                setDeadline(combineDateTime());
              }}
              style={styles(theme).buttonText}>
              Confirm
            </Text>
          </View>
          {deadline && <Text>{deadline.toLocaleString()}</Text>}
        </View>
      </Accordion>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-evenly',
          alignSelf: 'flex-start',
        }}>
        <Text>Is it a Routine ?</Text>
        <CheckBox
          style={{margin: 5}}
          checkBoxColor={theme.colors.foreground}
          checkedCheckBoxColor={theme.colors.primary}
          isChecked={isRoutine}
          onClick={() => {
            setIsRoutine(!isRoutine);
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
    container: {borderColor: theme.colors.primary, borderWidth: 1},
    buttons: {
      flexDirection: 'row',
      margin: theme.spacing.s,
      alignSelf: 'flex-end',
    },
    buttonText: {
      color: theme.colors.primary,
      fontWeight: 'bold',
      padding: theme.spacing.s,
      borderColor: theme.colors.primary,
    },
    Accordin: {
      borderWidth: 0.2,
      borderColor: theme.colors.primary,
      borderRadius: 12,
      padding: 12,
      margin: theme.spacing.s,
    },
    textInput: {
      borderRadius: 6,
      padding: 12,
      borderColor: theme.colors.primary,
      // borderBottomWidth: 2,
      borderWidth: 0.2,
      margin: theme.spacing.s,
      marginBottom: 10,
    },
  });
