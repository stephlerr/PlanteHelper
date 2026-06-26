import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './src/screens/CameraScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Camera" 
          component={CameraScreen}
          options={{ title: '📸 Identifier' }}
        />
        <Tab.Screen 
          name="History" 
          component={HistoryScreen}
          options={{ title: '📚 Historique' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
