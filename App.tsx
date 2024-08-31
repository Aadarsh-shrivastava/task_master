import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import {PaperProvider} from 'react-native-paper';
import {ThemeProvider} from './contexts/themeContext';
import Router from './navigation/Router';
import {Provider} from 'react-redux';
import store from './redux/store';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </PaperProvider>
    </Provider>
  );
}

export default App;
