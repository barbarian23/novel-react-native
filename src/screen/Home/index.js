import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeTab from "./home.tab";
import LibraryTab from "./library.tab";
import AboutTab from "./about.tab";

const Tab = createBottomTabNavigator();

export default function Home() {
  const tabStyle = {
    headerShown: false,
    tabBarShowLabel: true,
    tabBarStyle: {
      backgroundColor: "#15415C"
    },
    tabBarLabelStyle: {
      color: 'white'
    },
    // tabBarIconStyle: {
    //   color: 'white'
    // }
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Icon name="home" size={25} color="#FFF" />
          ),
          ...tabStyle,
        }} />

      <Tab.Screen
        name="LibraryTab"
        component={LibraryTab}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: () => (
            <Icon name="book" size={25} color="#FFF" />
          ),
          ...tabStyle,
        }} />

      <Tab.Screen
        name="AboutTab"
        component={AboutTab}
        options={{
          tabBarLabel: "About",
          tabBarIcon: () => (
            <Icon name="user" size={25} color="#FFF" />
          ),
          ...tabStyle,
        }} />
    </Tab.Navigator>
  );
}