import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import HomeScreen from './HomeScreen';
// import SettingsScreen from './SettingsScreen';
import {
  JournalScreen,
  MeasuresScreen,
  TreatmentScreen,
  ProfileScreen,
} from '../screens';

import AddButton from './AddButton';

const TabNavigator = createBottomTabNavigator(
  {
    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
        ),
      },
    },
    Measures: {
      screen: MeasuresScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
        ),
      },
    },
    Add: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton />,
      },
    },

    Treatment: {
      screen: TreatmentScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="band-aid" size={24} color="#CDCCCE" />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="user" size={24} color="#CDCCCE" />
        ),
      },
    },
  },

  {
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export default createAppContainer(TabNavigator);
