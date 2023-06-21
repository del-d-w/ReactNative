import React, { useLayoutEffect } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function EmptyScreen() {
  return <View />;
}

const notificationsData = [
  { id: 1, name: 'Risk Assessment', title: 'Approved' },
  { id: 2, name: 'Risk Assessment', title: 'Rejected' },
  { id: 3, name: 'Risk Assessment', title: 'Success' },
];

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const handleNotificationPress = (notification) => {
    console.log("NotificationPressed", notification)
    navigation.navigate('NotificationDetails', { notification });
  };

  return (
    <View style={styles.container}>
      {notificationsData.map((notification) => (
        <TouchableOpacity
          key={notification.id}
          style={styles.notificationContainer}
          onPress={() => handleNotificationPress(notification)}
        >
          <Text style={styles.text}>{notification.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 10,
    width: 150,
    textAlign: 'center',
    borderRadius: 8,
  },
});

const NotificationReusableScreen = ({ route }) => {
  const navigation = useNavigation();
  const { notification } = route.params;
  useLayoutEffect(() => {
    // Update the header title with the name from the API data
    navigation.setOptions({ title: notification.name });
  }, []);

  return (
    <View>
      <Text>Your scheduled report {notification.name} has been {notification.title}</Text>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={EmptyScreen} />
      <Tab.Screen name="Escalations" component={EmptyScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Settings" component={EmptyScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationDetails" component={NotificationReusableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
