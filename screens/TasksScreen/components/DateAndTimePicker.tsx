import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {TouchableHighlight} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Style} from 'react-native-paper/lib/typescript/components/List/utils';

interface DateAndTimePickerProps {
  setDate: (selectedDate: Date) => void;
  setTime: (selectedDate: Date) => void;
  date: Date | null;
  time: Date | null;
  textStyles: TextStyle;
  viewStyle: ViewStyle;
  submitStyle: TextStyle;
}
const DateAndTimePicker = ({
  submitStyle,
  textStyles,
  viewStyle,
  setDate,
  setTime,
  date,
  time,
}: DateAndTimePickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event: any, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  return (
    <View style={[viewStyle, styles.container]}>
      {/* <Text>Pick Deadline</Text> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
        }}>
        <Text
          onPress={() => setShowDatePicker(true)}
          style={[textStyles, styles.text]}>
          Date
        </Text>
        {showDatePicker && (
          <DateTimePicker
            value={date ?? new Date()}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
        <Text
          onPress={() => setShowTimePicker(true)}
          style={[textStyles, , styles.text]}>
          Time
        </Text>
        {showTimePicker && (
          <DateTimePicker
            value={time ?? new Date()}
            mode="time"
            onChange={onTimeChange}
          />
        )}
      </View>
    </View>
  );
};

export default DateAndTimePicker;

const styles = StyleSheet.create({
  container: {margin: 10},
  text: {
    borderWidth: 1,
    borderRadius: 25,
    width: 60,
    textAlign: 'center',
  },
});
