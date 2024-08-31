import DateTimePicker, {DateType} from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import {Theme, useTheme} from '../contexts/themeContext';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';

const DatePicker = () => {
  const [date, setDate] = useState<DateType>(dayjs());
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      {/* <Text style={{color: '#fff'}}>{date?.toLocaleString()}</Text> */}
      <DateTimePicker
        calendarTextStyle={{color: theme.colors.foreground}}
        selectedItemColor={theme.colors.primary}
        headerTextStyle={{color: theme.colors.inactive}}
        weekDaysTextStyle={{color: theme.colors.inactive}}
        headerButtonColor={theme.colors.inactive}
        monthContainerStyle={{backgroundColor: theme.colors.background}}
        yearContainerStyle={{backgroundColor: theme.colors.background}}
        mode="single"
        date={date}
        onChange={params => {
          setDate(params.date);
        }}
      />
    </View>
  );
};

export default DatePicker;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      color: theme.colors.foreground,
    },
  });
