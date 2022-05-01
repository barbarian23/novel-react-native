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
import { Splash, Home } from "./src/screen";
const Stack = createStackNavigator();

// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import {  } from './sagas'

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(helloSaga)


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
