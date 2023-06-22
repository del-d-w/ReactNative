import React from "react";
import {useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen'
import EscalationsScreen from './components/EscalationsScreen'
import NotificationsScreen from './components/NotificationsScreen'
import SettingsScreen from './components/SettingsScreen'
import NotificationsReusableScreen from './components/NotificationsReusableScreen'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Escalations" component={EscalationsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs}  options={{ headerShown: false }}/>
        <Stack.Screen name="NotificationDetails" component={NotificationsReusableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
