import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MyShifts from '../screens/MyShifts';
import AvailableShifts from '../screens/AvailableShifts';
import {colors} from '../lib/colors';
import {scaleFontSize} from '../lib/utils';
import {useAppDispatch} from '../store';
import {fetchShifts} from '../store/shifts';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
        headerShown: false,
        tabBarIconStyle: {
          display: 'none',
        },
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: scaleFontSize(14),
          textAlignVertical: 'center',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarActiveTintColor: colors.text1,
        tabBarInactiveTintColor: colors.subText1,
      }}
    >
      <Tab.Screen
        name="MyShifts"
        component={MyShifts}
        options={{
          title: 'My Shifts',
        }}
      />
      <Tab.Screen
        name="AvailableShifts"
        component={AvailableShifts}
        options={{
          title: 'Available Shifts',
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchShifts())
      .then()
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
