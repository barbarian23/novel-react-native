/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SeeAll, Home, History } from "./src/screen";
const Stack = createStackNavigator();

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/saga';
import rootReducer from './src/reducer';
import Detail from './src/screen/Detail/detail.screen';
import { SafeAreaView } from 'react-native';
import ReadScreen from './src/screen/Read/read.screen';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name="SeeAll"
              component={SeeAll}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name="ReadScreen"
              component={ReadScreen}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name="History"
              component={History}
              options={{
                headerShown: false
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};


export default App;
