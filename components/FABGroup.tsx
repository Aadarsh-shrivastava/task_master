import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FAB, PaperProvider, Portal, Icon} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Theme, useTheme} from '../contexts/themeContext';
interface FABGroupProps {
  FABs: FAB[];
}

type FAB = {
  icon: any;
  label: string;
  onPress: () => void;
};
const FABGroup = ({FABs}: FABGroupProps) => {
  const [FABstate, setFABState] = React.useState<{open: boolean}>({
    open: false,
  });
  const {theme} = useTheme();
  const onFABStateChange = ({open}: {open: boolean}) => setFABState({open});

  const {open} = FABstate;
  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          rippleColor={theme.colors.success}
          icon={
            open
              ? ({}) => (
                  <MaterialIcons color={'#0CA996'} size={24} name="camera" />
                )
              : ({color, size}) => (
                  <MaterialIcons color={color} size={size} name="add" />
                )
          }
          actions={FABs}
          onStateChange={onFABStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
          style={styles(theme).container}
          fabStyle={{
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.primary,
            borderWidth: 1, // padding: theme.spacing.s,
          }}
          backdropColor={theme.colors.background}
        />
      </Portal>
    </PaperProvider>
  );
};

export default FABGroup;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      margin: theme.spacing.m,
    },
  });
